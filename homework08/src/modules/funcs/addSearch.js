const addSearch = (navigate, location, checkbox, option,) => {
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
        const oldSearch = query.getAll(option)[0];
        const values = query.getAll(option)[0].split(',');
        values.splice(values.indexOf(checkbox.id), 1);
        query.delete(option);
        values.forEach(value => query.append(option, value));
        let otherKeys = 0;
        for (const key of query.keys()) {
            otherKeys++;
        }
        if (!otherKeys) {
            if (query.get(option)) {
                navigate(location.pathname + `?${option}=${query.getAll(option)}`);
            } else {
                navigate(location.pathname);
            }
        } else {
            let newSearch = '';
            if (query.get(option)) {
                newSearch = location.search.replace(`${option}=${oldSearch}`, `${option}=${query.getAll(option)}`);
            } else {
                const searchItems = location.search.replace('?', '').split('&');
                const resultItems = searchItems.filter(item => item !== `${option}=${oldSearch}`);
                newSearch = '?';
                for (let i = 0; i < resultItems.length - 1; i++) {
                    newSearch += `${resultItems[i]}&`;
                }
                newSearch += `${resultItems[resultItems.length - 1]}`;
            }
            navigate(location.pathname + newSearch);
        }
    }
};

export default addSearch;