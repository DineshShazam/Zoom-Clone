import express from 'express'
import path from 'path'
import { v4 as uuidv4 } from 'uuid';
import handlebars from 'express-handlebars'

const app = express();

// Set the view engine
app.set('view engine','hbs')

// render css file
app.use(express.static(path.join(__dirname+'/public')))

  
// configure express handlebars  
app.engine('hbs',handlebars({
    layoutsDir:__dirname+'/views/layouts',      
    extname:'hbs' 
}))

app.get('/',(req,res) => {  
    
   res.redirect(`/${uuidv4()}`)

});

app.get('/:roomid',(req,res) => {
   
    res.render('body',{layout:'index',room_id:req.params.roomid});

})




export default app;



