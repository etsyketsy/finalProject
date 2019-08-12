import {
    FILTER_BIOPSIES,
    FILTER_SUBBIOPSIES,
    FILTER_SKINLAYERS,
    FILTER_CELL_TYPES,
    FILTER_PASSAGE
} from "../types";

export const filterAction = (item, filterActive) => async (
    dispatch,
    getState
) => {
    // const state = getState();
    if (filterActive) {
        return dispatch({type: "REMOVE_ALL_FILTER"});
    }

    if (item.gender) {
        await dispatch({
            type: FILTER_BIOPSIES,
            payload: item.numbering
        });
        await dispatch({
            type: FILTER_SUBBIOPSIES,
            payload: getState().biopsyReducer.biopsies.map(b => b.numbering)
        });
        await dispatch({
            type: FILTER_SKINLAYERS,
            payload: getState().subBiopsyReducer.subBiopsies.map(b => b.numbering)
        });
        await dispatch({
            type: FILTER_CELL_TYPES,
            payload: getState().skinLayerReducer.skinLayers.map(b => b.numbering)
        });
        await dispatch({
            type: FILTER_PASSAGE,
            payload: {
                numbers: getState().cellTypeReducer.cellTypes.map(b => b.numbering),
                level: 0
            }
        });
        //
    } else if (item.donor) {
        console.log("donor", item);

        await dispatch({
            type: FILTER_SUBBIOPSIES,
            payload: [item.numbering]
        });
        await dispatch({
            type: FILTER_SKINLAYERS,
            payload: getState().subBiopsyReducer.subBiopsies.map(b => b.numbering)
        });
        await dispatch({
            type: FILTER_CELL_TYPES,
            payload: getState().skinLayerReducer.skinLayers.map(b => b.numbering)
        });
        await dispatch({
            type: FILTER_PASSAGE,
            payload: {
                numbers: getState().cellTypeReducer.cellTypes.map(b => b.numbering),
                level: 0
            }
        });
    } else if (item.biopsy) {
        console.log("subps", item);
        await dispatch({
            type: FILTER_SKINLAYERS,
            payload: [item.numbering]
        });
        await dispatch({
            type: FILTER_CELL_TYPES,
            payload: getState().skinLayerReducer.skinLayers.map(b => b.numbering)
        });
        await dispatch({
            type: FILTER_PASSAGE,
            payload: {
                numbers: getState().cellTypeReducer.cellTypes.map(b => b.numbering),
                level: 0
            }
        });
    } else if (item.sub_biopsy) {
        await dispatch({
            type: FILTER_CELL_TYPES,
            payload: [item.numbering]
        });
        await dispatch({
            type: FILTER_PASSAGE,
            payload: {
                numbers: getState().cellTypeReducer.cellTypes.map(b => b.numbering),
                level: 0
            }
        });
    } else if (item.skin_layer) {
        await dispatch({
            type: FILTER_PASSAGE,
            payload: {
                numbers: [item.numbering],
                level: 0
            }
        });
    } else {
        await dispatch({
            type: FILTER_PASSAGE,
            payload: {
                numbers: [item.numbering],
                level: item.level,
                passage: true
            }
        });
    }
};
