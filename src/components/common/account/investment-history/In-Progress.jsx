

import React from 'react';
import { MarketItem1 } from '../../../../assets/import';
import { in_progress } from '../../../../data/investment-history';
import { Div } from '../../../../style-component';
import { icons } from '../../../../constant/icon';


const InProgress = () => {

    return (
        <>
            {in_progress.map((item, index) => (
                <Div.BorderBox key={index.id}>

                    <Div.AccountBox
                        itemImg={MarketItem1}
                        title={item.title}
                        user={item.user}
                        desc={item.desc}
                        current_value={item.current_value}
                        rate_level={<icons.ArtSecArrowUp />}
                        rate={item.rate}
                        rate_charts={<icons.ArtSecHistoryLine className="-mt-5" />}
                        bgColor="app-select"
                    >
                          <Div.Button
                                desc={item.btn_value}
                                bgColor="app-btn"
                                color="text-white"
                                width="w-60"
                                padding="p-2"
                            />

                            <Div.Button
                                desc={item.cancel_bid}
                                color="text-red-500"
                            />
                    </Div.AccountBox>
                </Div.BorderBox>
            ))}
        </>
    )
}

export default InProgress