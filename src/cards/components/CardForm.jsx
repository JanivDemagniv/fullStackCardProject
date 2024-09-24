import React from 'react'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'

export default function CardForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange }) {



    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            validateForm={validateForm}
            title={title}
            styles={{
                maxWidth: '800px'
            }}>
            <Input
                name='title'
                label='title'
                error={errors.title}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='subtitle'
                label='subtitle'
                error={errors.subtitle}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='description'
                label='description'
                error={errors.description}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='phone'
                label='phone'
                error={errors.phone}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='email'
                label='email'
                error={errors.email}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='webUrl'
                label='web'
                error={errors.webUrl}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false} />
            <Input
                name='imageUrl'
                label='image url'
                error={errors.imageUrl}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false} />
            <Input
                name='imageAlt'
                label='image alt'
                error={errors.imageAlt}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false} />
            <Input
                name='state'
                label='state'
                error={errors.state}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false} />
            <Input
                name='country'
                label='country'
                error={errors.country}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='city'
                label='city'
                error={errors.city}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='street'
                label='street'
                error={errors.street}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='houseNumber'
                label='houseNumber'
                error={errors.houseNumber}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />
            <Input
                name='zip'
                label='zip'
                error={errors.zip}
                onChange={onInputChange}
                data={data}
                sm={6}
                required />

        </Form >
    )
}
