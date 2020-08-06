import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Books from './pages/Books';
import BookReservation from './pages/BookReservation';
import CancelReservation from './pages/CancelReservation';
import BookRent from './pages/BookRent';
import GiveBook from './pages/GiveBook';
import BooksToBeGiven from './pages/BooksToBeGiven';
import WeeklyBooks from './pages/WeeklyBooks';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/books" exact component={Books}/>
                <Route path="/bookreservation" exact component={BookReservation}/>
                <Route path="/cancelreservation" exact component={CancelReservation}/>
                <Route path="/bookrent" exact component={BookRent}/>
                <Route path="/givebook" exact component={GiveBook}/>
                <Route path="/bookstobegiven" exact component={BooksToBeGiven}/>
                <Route path="/weeklybooks" exact component={WeeklyBooks}/>
            </Switch>
        </BrowserRouter>
    );
}