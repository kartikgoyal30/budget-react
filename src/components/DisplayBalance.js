import React from "react";
import { Statistic } from "semantic-ui-react";

const DisplayBalance=(props)=>{
    const {size='tiny', color='black',value,title}=props;
    return(
          <Statistic size={size} color={color}>
                <Statistic.Label style={{textAlign:"left"}}>
                  {title}
                </Statistic.Label>
                <Statistic.Value>{value}</Statistic.Value>
          </Statistic>
    );
}

export default DisplayBalance;