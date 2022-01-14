import * as React from "react"
import Splitter from './common/Splitter'
import FlowTable from './FlowTable'
import FlowView from './FlowView'
import RepeaterView from './RepeaterView'
import {useAppSelector} from "../ducks";

export default function MainView() {
    const hasSelection = useAppSelector(state => !!state.flows.byId[state.flows.selected[0]]);

    // TODO should work when repeater tab is clicked
    // May be able to move logic into Header.tsx, which knows which tab is currently selected
    // Or have Header.tsx set something in RootState
    const repeater_bool = useAppSelector(state => state.repeater.visible);

    if (repeater_bool) {
        return (
            <div className="main-view">
                <RepeaterView/>
            </div>
        )
    }

    if (!hasSelection)  {    
        return (
            <div className="main-view">
                <FlowTable/>
            </div>
        )
    } else {
        return (
            <div className="main-view">
                <FlowTable/>
                <Splitter key="splitter"/>
                <FlowView key="flowDetails"/>
            </div>
        )
    }
}
