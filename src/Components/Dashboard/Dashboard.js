import './Dashboard.css'
import React, {Component} from 'react'

export default class Dashboard extends Component{

    // showsHover = () => {if (document.querySelector('.card-button').style.display === 'none'){
    //     document.querySelector('.card-button').style.display = 'block'
    // } document.querySelector('.card-button').style.display = 'block'
    // }onClick={this.showsHover}

    render(){
        return (
            <div className="Dashboard">
                <img className="img" alt="" src="https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg" />
                <img className="img" alt="" src="https://d2gtpjxvvd720b.cloudfront.net/system/recipe/image/5016/default_Hungry-Girl-Healthy-Air-Fryer-Philly-Cheesesteak-Egg-Rolls-recipe-Cut-20190703-1503-31216-2118.jpg" />
                <img className="img" alt="" src="https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_400%2Cc_limit/0817-murray-mancini-dried-tomato-pie.jpg" />
                <img className="img" alt="" src="https://pinchofyum.com/wp-content/uploads/Mediterranean-Bowl-Recipe.jpg" />
                <img className="img" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwDNHjBZCzyt8S4skpjJxExUX3BfTW13T53J-pQY8C5WuT9XZQA" />
                <img className="img" alt="" src="https://imagesvc.timeincapp.com/v3/mm/image?url=https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1521839050/zucchini-mushroom-caprese-bowl-ck-1805p45_0_0.jpg?itok=Rw3b3P80&w=800&q=85" />
                <img className="img" alt="" src="https://static01.nyt.com/images/2019/06/12/dining/as-pasta-with-ricotta-and-lemon/merlin_155855151_a42a72df-8230-420d-b9b9-d81fe089ff55-articleLarge.jpg" />
                <img className="img" alt="" src="https://s23209.pcdn.co/wp-content/uploads/2018/09/Creamy-Beef-and-ShellsIMG_6411.jpg" />
                <div className="hover-div" >
                    <button className="card-button">Share</button>
                    <button className="card-button">View</button>
                    <button className="card-button">Save</button>
                </div>
                </div>
        )
    }
}