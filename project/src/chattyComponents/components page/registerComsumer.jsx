import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';

import Navbar from '../../components/repeatability/Navbar';
// import '../css/register.css';

var upwhere = window.location.href;

function Register2() {
    const [result, setResult] = useState("");

    // 發送驗證碼
    const reschkButton = () => {
        var sendmail = $('#inputEmail').val();
        // var account = $('#inputEmail').val();
        if(sendmail){
            // $.post("http://localhost:80/loginComsumer/isNewAccount.php", {account}, function(data){
            //     console.log(data);
            // })
            alert('已成功發送，請至信箱確認');
        }
        // console.log(sendmail);
        $.post("http://localhost:80//ourPHPFinalproject/ChtProject/sendmail/sendmail.php", {sendmail}, function(data){
            setResult(data);
            
        })

    }

    
    const enterChkNumber = () => {
        var correctNumber = parseInt( $('#chkmesg').text());
        var inputChknumber = parseInt( $('#reschknumber').val());
        // alert(correctNumber);

        // console.log(chkNumber);
        if (inputChknumber == correctNumber) {
            $('#chkconfirm').css("visibility",'visible') ;
            // $('#chkconfirm').fadeIn();
            // break;
        }
        if (inputChknumber != correctNumber) {
            $('#chkconfirm').css("visibility",'hidden') ;
            // break;
        }
    }

    const doShow = () => {
        var checkBox = document.getElementById("passwdchk");
        if(checkBox.checked == true){
            $('#password').attr('type', 'text');
        }else{
            $('#password').attr('type', 'password');
        }
        
    }
    
    const dopwdchk = (e) => {
        console.log(e.target.value)
        let pwd = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,8}$/);
        if ( pwd.test( e.target.value ) ) {
            $('#pwdrex').css("visibility",'visible') ;
        }
           
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        var correctNumber = $('#chkmesg').text();
        var inputChknumber = $('#reschknumber').val()
        // alert(correctNumber);

        // console.log(chkNumber);
        if (inputChknumber != correctNumber) {
            alert("驗證碼錯誤!");
            // break;
        }
        else {
            const form = $(e.target);
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                success(data) {
                    // setResult(data);
                    alert(data);
                    localStorage.setItem('upwhere', upwhere);
                    window.location = "http://localhost:3000/loginComsumer";
                }
            })
        }
        // console.log("hi");

    }


    return (
        <React.Fragment>
            <div className="backimg">
            <Navbar />
            <br />
            
            {/* 消費者註冊 */}
            <div id='registerform'>
                <form className="form-signin registerformin p-5" id='registerformin' encType="multipart/form-data"
                style={{
                    // backgroundColor:'black'
                    boxShadow:'8px 8px 10px 10px rgba(49, 166, 150 ,0.5)'
                }}
                    method='POST' action='http://localhost//ourPHPFinalproject/ChtProject/loginComsumer/register.php'
                    onSubmit={(event) => handleSumbit(event)}>
                    <h1 className="h3 mb-3 font-weight-normal">讓我們開始註冊吧</h1>
                    <h6>開始建立你的帳戶</h6>
                    {/* email */}
                    <input id="inputEmail" name='inputEmail' type="email" className="form-control" placeholder="電子郵件" required autoFocus />

                    <div className="container my-0">
                        <div className='row mb-2'>
                            {/* 驗證碼 */}
                            <input type="text" id="reschknumber" name='reschknumber' 
                                className="form-control col-7" placeholder="驗證碼" required autoFocus 
                                onChange={enterChkNumber} />
                            <button onClick={reschkButton} className='btn btn-primary btn-block col-5'><small>發送驗證碼</small></button>
                            <div id='chkconfirm' style={{ color: 'green', height: '15px', visibility: 'hidden' }} ><FontAwesomeIcon icon={faCircleCheck} /></div>

                        </div>
                        <div className='row'>
                            {/* firstName */}
                            <input type="text" id="inputFirstname" name="inputFirstname" className="form-control col-6" placeholder="姓" required autoFocus />
                            {/* lastName */}
                            <input type="text" id="inputLastname" name="inputLastname" className="form-control col-6" placeholder="名" required autoFocus />
                        </div>
                    </div>
                    {/* tel */}
                    <input type="text" id="phoneNumber" name="phoneNumber" className='btn-block form-control' placeholder='手機號碼' required autoFocus />
                    {/* password */}
                    <input type="password" id="password" name="password" className="form-control" placeholder="密碼" required autoFocus
                        onChange={dopwdchk} />
                    <h6 className='text-danger'>請輸入6~8位密碼，含特殊符號、大寫、小寫及數字至少各一位<span id='pwdrex' style={{ color: 'green', height: '15px', visibility: 'hidden' }} ><FontAwesomeIcon icon={faCircleCheck} /></span></h6>
                    
                    <input type="checkbox" name="passwdchk" id="passwdchk" 
                    onClick={doShow} 
                    />
                    <label htmlFor="passwdchk">顯示密碼</label>
                    {/* <i className="fas fa-eye" 
                    style={{position:'absolute',top:'59%',right:'40%'}} 
                    onClick={doShow}></i>
                    <i className="fas fa-eye-slash" 
                    style={{position:'absolute',top:'59%',right:'40%',display:'none'}} 
                    onClick={doHide}></i> */}
                    <div id="chkmesg" className='h6' style={{ color: 'red', height: '10px' 
                    , visibility:'hidden'
                    }}>{result}</div>
                    <button className="btn btn-lg btn-danger btn-block mt-4" type="submit">建立個人帳戶</button>
                </form>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Register2;