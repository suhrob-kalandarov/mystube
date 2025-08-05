import { useState, useEffect } from 'react'
import { colors } from '../../constants/colors'
import { Box, Container, Stack, Typography } from '@mui/material'

import { Category } from '../'
import { ApiService } from '../../service/api.service'

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')

    const selectedCategoryHandler = (category) => setSelectedCategory(category)

    useEffect(() => {
        ApiService.fetching('search').then(data => console.log(data))
    }, [])

    return (
        <Stack>
            <Category
                selectedCategoryHandler={selectedCategoryHandler}
                selectedCategory={selectedCategory}
            />
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
                    </Typography>
                    Videos
                </Container>
            </Box>
        </Stack>
    )
}

export default Main