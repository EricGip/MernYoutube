import React from 'react'
import Card from '@material-ui/core/Card';
import DialogTitle from "@material-ui/core/DialogTitle"
import Avatar from '@material-ui/core/Avatar';

function HomePage() {
    return (
        <div style={{ width: "85%", margin: "3rem auto"}}>
            <DialogTitle> Recommended </DialogTitle>
            <hr />

            <div>
                <div style={{ position: "relative" }}>
                    <img style={{width: "100%"}} src="" alt="test" />
                    <div>
                        <span> minute : second </span>
                    </div>
                </div>
                <Card title="">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Card>
                <span> writer name </span>
                <span style={{marginLeft:'3rem'}}> Views Count </span>
                    <span> date </span>
                </div>
        </div>
    )
}

export default HomePage
