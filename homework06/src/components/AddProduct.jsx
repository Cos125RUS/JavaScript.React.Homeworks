import {useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct, updateProduct} from "../reducers/productSlice";
import Product from "../entity/product";

/**
 * Компонент для добавления/обновления продуктов
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const AddProduct = (props) => {
    // Достаём продукт из пропсов, остальное упаковываем
    const {product, ...otherProps} = props;
    // Создаём переменные состояний
    const [name, setName] = useState(product ? product.name : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [price, setPrice] = useState(product ? parseInt(product.price) : 0);
    const [complete, setComplete] = useState('');
    // Создаём переменную для диспетчера
    const dispatch = useDispatch();

    /**
     * Вызов необходимого диспетчера
     */
    const completeEnter = (e) => {
        // Прерываем отправку формы
        e.preventDefault();
        // Проверка существования продукта
        if (product) {
            // Обновление продукта
            product.name = name;
            product.description = description;
            product.price = price;
            dispatch(updateProduct(product));
            setComplete('Product updated');
        } else {
            // Добавление нового продукта
            dispatch(addProduct(new Product(name, description, price)));
            setComplete('Product added');
        }
        // Обнуление полей ввода
        setName('');
        setDescription('');
        setPrice(0);
    };

    return (
        <>
            <form onSubmit={completeEnter} {...otherProps}>
                <input type="text"
                       placeholder="Product Name"
                       value={name}
                       onChange={e => setName(e.target.value)}/>
                <input type="text"
                       placeholder="Description"
                       value={description}
                       onChange={e => setDescription(e.target.value)}/>
                <label>
                    Price
                    <input type="number"
                           value={price}
                           onChange={e => setPrice(parseInt(e.target.value))}/>
                </label>
                <button>Complete</button>
            </form>
            <div>{complete}</div>
        </>
    );
};

export default AddProduct;