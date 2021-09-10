import React, { useEffect, useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useForm, FormProvider } from 'react-hook-form';
import { default as FormInput } from '../CustomTextField';

import { commerce } from '../../../lib/Commerce';
import Utils from '../../../lib/Utils';

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const fetchCountries = (checkoutTokenId) => {
        commerce.services.localeListShippingCountries(checkoutTokenId).then((respond) => {
            const { countries } = respond;
            setShippingCountries(countries);
            setShippingCountry(Object.keys(countries)[0]);
        })
    }
    const countries = Object.entries(shippingCountries).map(([code, country]) => ({ id: code, label: country }));

    const [shippingSubdivions, setShippingSubdivions] = useState([]);
    const [shippingSubdivion, setShippingSubdivion] = useState('');
    const fetchSubdivisions = (countryCode) => {
        commerce.services.localeListSubdivisions(countryCode).then((respond) => {
            const { subdivisions } = respond;
            setShippingSubdivions(subdivisions);
            setShippingSubdivion(Object.keys(subdivisions)[0]);
        })
    }
    const subdivisions = Object.entries(shippingSubdivions).map(([code, subdivison]) => ({ id: code, label: subdivison }));

    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const fetchShippingOptions = (checkoutTokenId, country, region = null) => {
        commerce.checkout.getShippingOptions(checkoutTokenId, { country, region }).then((options) => {
            setShippingOptions(options);
            setShippingOption(options[0].id);
        })
    }
    const options = shippingOptions.map((option) =>
        ({ id: option.id, label: `${option.description}: ${Utils.beautifyFormattedPrice(option.price.formatted_with_symbol)}` }));

    useEffect(() => {
        fetchCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
        shippingCountry && fetchSubdivisions(shippingCountry);
    }, [shippingCountry])

    useEffect(() => {
        shippingSubdivion && fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivion);
    }, [shippingSubdivion])

    const methods = useForm();
    return (
        <>
            <Typography variant='h6' gutterBottom>Adres dostawy</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivion, shippingOption }))}>
                    <Grid container spacing={3}>
                        <FormInput name="firstName" label="Imię" />
                        <FormInput name="lastName" label="Nazwisko" />
                        <FormInput name="address1" label="Adres" />
                        <FormInput name="email" label="E-mail" />
                        <FormInput name="city" label="Miasto" />
                        <FormInput name="zip" label="Kod pocztowy" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Kraj</InputLabel>
                            <Select value={shippingCountry} defaultValue={countries[0]} fullWidth onChange={e => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Województwo</InputLabel>
                            <Select value={shippingSubdivion} fullWidth onChange={e => setShippingSubdivion(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Metoda dostawy</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={e => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to="/cart" variant="outlined">Wróć do koszyka</Button>
                        <Button type="submit" variant="contained" color="primary">Dalej</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
};

export default AddressForm;