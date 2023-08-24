import { Box, Button, Grid } from "@mui/material"
import { useGlobalContext } from "./global.context"

export default function ProductGrid({products}) {
    return (
        <Grid container spacing={2}>
            {products.map(product => {
                return (
                    <Grid item xs={6}>
                        <Product product={product} />
                    </Grid>
                )
            })}
        </Grid>
    )
}
function Product({product}) {
    const [context, setContext] = useGlobalContext();
    const handleAddToCart = () => {
        const cartProductIndex = context.cart.findIndex(e => e.title === product.title);
        if (cartProductIndex > -1) context.cart[cartProductIndex].quantity++;
        else context.cart.push({
            title: product.title,
            quantity: 1,
            image: product.image,
            price: product.price,
            description: product.description
        })
        setContext({...context});
    }
    return (
        <>
            <Box>
                <img style={{width: 200}} src={product.image} alt="Product" />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>£{parseFloat(product.price).toFixed(2)}</p>
                <Button
                    variant="contained"
                    onClick={handleAddToCart}
                >
                    Sepete Ekle
                </Button>
            </Box>  
        </>
    )
}