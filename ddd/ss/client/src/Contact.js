import { Box } from "@mui/material";

export default function ContactPage () {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.4742851910717!2d33.33577675213949!3d35.207597463377596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10d861a26417%3A0x146624efc49a327b!2zR8O2w6dtZW5rw7Z5LCBOaWNvc2lh!5e0!3m2!1sen!2s!4v1692048933048!5m2!1sen!2s" 
                width="600" 
                height="450" 
                style={{border: '0', marginBottom: 48}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            />
        </Box>
    )
}