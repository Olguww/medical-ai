import { Box, Button, Dialog, DialogContent, Divider, Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { red } from "@mui/material/colors";
import { useGlobalContext } from "./global.context";

export default function Navbar() {
    const navigate = useNavigate();
    const handleChangePage = (page) => {
        navigate(`/${page}`);
    }
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 2,
                mt: 2,
            }}>
                <img src="sehraz.PNG" alt="Top Right Image" style={{width: 200}} />
            </Box>
            <Typography
                variant="h3"
            >
                Shakhraza Cosmetic Company Hoşgeldiniz
            </Typography>
            <Box sx={{bgcolor: 'black'}}>
                <List class="nav-list">
                    <ListItem>
                        <Button onClick={() => handleChangePage('anasayfa')}>
                            Anasayfa
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => handleChangePage('hakkimizda')}>
                            Hakkimizda
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => handleChangePage('servisler')}>
                            Servisler
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => handleChangePage('iletisim')}>
                            iletisim
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Cart />
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

function Cart() {
    const [context, setContext] = useGlobalContext();
    const [open, setOpen] = useState(false);
    const handleBuy = () => {
        alert("Satın Aldığınız İçin Teşşekürler");
        setContext({...context, cart: []});
        setOpen(false);
    }

    function CartProduct({product}) {
        const handleDelete = () => {
            const index = context.cart.findIndex(e => e.title === product.title);
            if (index < 0) return;
            context.cart.splice(index,1);
            setContext({...context});
        }
        return (
            <Grid container>
                <Grid item xs={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={product.image} style={{width: '100%'}} />
                </Grid>
                <Grid item xs={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {product.title}
                </Grid>
                <Grid item xs={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    £{parseFloat(product.price).toFixed(2)}
                </Grid>
                <Grid item xs={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    x{product.quantity}
                </Grid>
                <Grid sx={{textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'center'}} item xs={2}>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon style={{color: red[600]}} />
                    </IconButton>
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogContent
                    sx={{minWidth: 500}}
                >
                    <List>
                        <ListItem sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box>
                                Cart item
                            </Box>
                            <IconButton onClick={() => setOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </ListItem>
                        <Divider />
                        {context.cart.map(cartProduct => {
                            return (
                                <>
                                    <ListItem>
                                        <CartProduct product={cartProduct} />
                                    </ListItem>
                                    <Divider />
                                </>
                            )
                        })}
                        <Box sx={{textAlign:'right', mt: 2, mb: 2}}>
                            Total: £{parseFloat(context.cart.reduce((prev,curr) => prev += curr.quantity * curr.price, 0)).toFixed(2)}
                        </Box>
                    </List>
                    <Button
                        onClick={handleBuy}
                    >
                        Buy
                    </Button>
                </DialogContent>
            </Dialog>
            <IconButton>
                <ShoppingCartIcon onClick={() => setOpen(true)} style={{color: 'white'}}/>
            </IconButton>
        </>
    )
}