import React from "react";
import Moment from 'react-moment';
import Helper from "../utils/helper";

function SmallTag({lastUpdated}) {

    return (
        lastUpdated && <small>Last updated <Moment fromNow>{Helper.formatDateToHumanReadable(lastUpdated)}</Moment> </small>
    );
}

export default SmallTag;