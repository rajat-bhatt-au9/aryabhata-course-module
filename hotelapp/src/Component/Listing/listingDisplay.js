import React from 'react';

const ListingDiplay = (props) => {
    const renderList = ({hotellist}) => {
        if(hotellist){
            return(
                <div>Data</div>
            )
        }else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }

    }
    return(
        <div>
            {renderList(props)}
        </div>
    )
}

export default ListingDiplay;