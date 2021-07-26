import React from 'react';
import { View } from 'react-native';

const SearchBar = ({ children, spacing }) => {
    return (
        <View style={{margin: spacing, marginTop: (spacing/2), marginBottom: (spacing/2)}}>
            {children}
        </View>
    );
};

SearchBar.defaultProps = {
    spacing: 25
};

export default SearchBar;