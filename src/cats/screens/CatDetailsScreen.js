import React from "react";

import CatItem from "../components/CatItem";

const CatDetailsScreen = ({ navigation, route }) => {
    
    return(
        <>
            <CatItem {...route.params} />
        </>
    )
}

export default CatDetailsScreen;
