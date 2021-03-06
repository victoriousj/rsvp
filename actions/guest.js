import * as GuestActionTypes from  '../actiontypes/guest';

export const removeGuest = id => {
    return {
        type: GuestActionTypes.REMOVE_GUEST,
        id,
    };
};

export const createGuest = () => {
    return {
        type: GuestActionTypes.CREATE_GUEST,
    };
};

export const setGuestName = (id, name) => {
    return {
        type: GuestActionTypes.SET_GUEST_NAME,
        name,
        id
    };
};

export const toggleGuestProp = (id, prop) => {
    return {
        type: GuestActionTypes.TOGGLE_GUEST_PROP,
        prop,
        id
    };
};

export const toggleIsFiltered = () => {
    return {
        type: GuestActionTypes.TOGGLE_IS_FILTERED,
    };
};

export const toggleGuestEditing = id => {
    return {
        type: GuestActionTypes.TOGGLE_GUEST_EDITING,
        id
    };
};

export const changePendingGuest = e => {
    return {
        type: GuestActionTypes.CHANGE_PENDING_GUEST,
        e
    };
};

export const toggleGuestConfirmation = id => {
    return {
        type: GuestActionTypes.TOGGLE_GUEST_CONFIRMATION,
        id
    };
};
