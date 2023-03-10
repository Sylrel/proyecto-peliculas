import React from 'react';
import { DataProvider } from '../context/DataContext';
import FormSearch from './FormSearch';
import Movies from './Movies';

const MainPage = () => {
    return (
        <>
            <DataProvider>
                <FormSearch />
                <Movies />
            </DataProvider>

        </>
    );
};

export default MainPage;