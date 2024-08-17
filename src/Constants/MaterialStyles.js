export const useMUIStyles = {
    light: {
        '& .MuiPaginationItem-root': {
            '&.Mui-selected': {
                backgroundColor: 'rgb(51, 147, 255)',
                color: 'white',
            },
            '&:hover': {
                backgroundColor: 'rgb(129, 140, 248)',
            },
        },
    },
    dark: {
        '& .MuiPaginationItem-root': {
            color: 'white',
            '&.Mui-selected': {
                backgroundColor: 'rgb(100,116,139)',
                color: 'white',
            },
            '&:hover': {
                backgroundColor: 'rgb(129, 140, 248)',
            },
        },
        '& .MuiRating-iconEmpty': {
            color: 'white',
        },
    },
};