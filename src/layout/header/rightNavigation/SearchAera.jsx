import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { useTheme } from '../../../providers/CustomThemeProvider';


export default function SearchAera() {
    const { isDark } = useTheme()
    const [searchParams, setSearch] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query') || '');
    const location = useLocation()

    useEffect(() => {
        if (query) {
            setSearch({ query });
        } else {
            setSearch({})
        }
    }, [query, setSearch]);

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    if (location.pathname == '/cards' || location.pathname == '/mycards' || location.pathname == '/favouritecards')
        return (
            <Box>
                <FormControl>
                    <OutlinedInput
                        size='small'
                        placeholder='Search'
                        value={query}
                        onChange={handleChange}
                        startAdornment={
                            <InputAdornment position='start'>
                                <SearchIcon aria-label='search' />
                            </InputAdornment>
                        }
                        sx={{ backgroundColor: isDark ? '#222831' : '#f7f7f7' }}
                    ></OutlinedInput>
                </FormControl>
            </Box>
        )
}
