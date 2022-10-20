
import React from 'react';
import { MarketItem1 } from '../../../assets/import';
import { documents } from '../../../data/documents';
import { Div } from '../../../style-component';


const Documents = () => {
   
    return (
        <>
            {documents.map((item, index) => (
                <Div.BorderBox key={index.id} >
                    <Div.AccountBox
                        itemImg={MarketItem1}
                        title={item.title}
                        user={item.user}
                        current_value={item.current_value}
                    >
                        <Div.Button
                            desc={item.btn_desc}
                            bgColor="app-btn"
                            color="text-white"
                            width="w-60"
                            padding="p-2"
                        />
                    </Div.AccountBox>
                </Div.BorderBox>
            ))}

            
        </>
    )
}

export default Documents