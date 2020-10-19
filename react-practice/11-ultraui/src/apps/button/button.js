import React from 'react';
import {Button, ButtonGroup, ButtonList } from '@huayun/ultraui';
import { render } from 'react-dom';

class UltraButton extends React.Component{
    render(){
        return (<div>
            <ButtonList className="m-b">
            <Button type="primary" name="主按钮" />
            <Button type="default" name="次按钮" />
            <Button type="dashed" name="虚线按钮" />
            <Button type="primary" icon="add">创建</Button>
        </ButtonList>
        <ButtonList>
            <Button type="primary" name="信息按钮" />
            <Button type="success" name="成功按钮" />
            <Button type="warning" name="警告按钮" />
            <Button type="danger" name="危险按钮" />
            <Button type="text" name="text按钮" />
        </ButtonList>
        </div>)
    }
}

export default UltraButton;