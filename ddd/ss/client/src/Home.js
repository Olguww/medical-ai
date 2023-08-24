import { Box } from "@mui/material";
import ProductGrid from "./Product";
import { useEffect, useState } from "react";
import request from "./api/request";

export default function HomePage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        request({
          method: 'GET',
          path: 'products.php'
        }).then(res => {
            if (Array.isArray(res.data)) setProducts(res.data);
        });
    },[]);
    return (
        <>
            <Box
                sx={{
                    width: 1,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <ProductGrid 
                    products={products}
                />
            </Box>
        </>
    )
}