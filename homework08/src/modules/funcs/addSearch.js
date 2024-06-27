
const addSearch = (navigate, location, checkbox, option, ) => {
    const query = new URLSearchParams(location.search);

    if (checkbox.checked) {
        if (location.search) {
            if (!query.get(option)) {
                navigate(location.pathname + location.search + `&${option}=${checkbox.id}`);
            } else {
                const oldValue = query.getAll(option);
                query.append(option, checkbox.id);
                const newValue = query.getAll(option);
                const newSearch = location.search.replace(`${option}=${oldValue}`, `${option}=${newValue}`);
                navigate(location.pathname + newSearch);
            }
        } else {
            query.append(option, checkbox.id);
            navigate(location.pathname + `?${option}=${query.getAll(option)}`);
        }
    } else {

    }
};

export default addSearch;