import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";
export default class Services extends 
Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'Lorem ipsum'
            },
            {
                icon:<FaHiking/>,
                title:"endless hiking",
                info:'Lorem ipsum'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:'Lorem ipsum'
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:'Lorem ipsum'
            }
        ]
    }
    render() {
        return (
        <section className="services">
            <Title title='services'/>
            <div className='services-center'>
                {this.state.services.map(item => {
                    return (
                    <article key={`item-${item.title}`} className='service'>
                    <span>{item.icon}</span>
                    <h6> {item.title}</h6>
                    <p>{item.info}</p>
                </article>);})}
            </div>
        </section>
        );
    }
}
