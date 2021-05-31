const form = document.querySelector('.v-form form');
// 全要素
const vElem = document.querySelectorAll('[class^="v-"]');
const vElemLen = vElem.length;
let alertFlag;
// メールアドレス
const email = document.querySelectorAll('.v-email');
const emailLen = email.length;
const doubleCheck01 = document.querySelector('.v-double_check01');
const doubleCheck02 = document.querySelector('.v-double_check02');
// 電話番号
const tel = document.querySelectorAll('.v-tel');
const telLen = tel.length;
// 郵便番号
const zip = document.querySelectorAll('.v-zip');
const zipLen = zip.length;
// 必須入力
const RequiredText = document.querySelectorAll('.v-required[type="text"]');
const RequiredTextLen = RequiredText.length;
const RequiredTextarea = document.querySelectorAll('textarea.v-required');
const RequiredTextareaLen = RequiredTextarea.length;
const RequiredEmail = document.querySelectorAll('.v-required[type="email"]');
const RequiredEmailLen = RequiredEmail.length;
const RequiredCheckbox = document.querySelectorAll('.v-required[type="checkbox"]');
const RequiredCheckboxLen = RequiredCheckbox.length;
const RequiredRadio = document.querySelectorAll('.v-required[type="radio"]');
const RequiredRadioLen = RequiredRadio.length;
const RequiredSelect = document.querySelectorAll('select.v-required');
const RequiredSelectLen = RequiredSelect.length;

export default function() {
    if( form ) {
        // リアルタイムチェック
        if ( vElemLen ) {
            for( let i = 0; i < vElemLen; i++ ) {
                vElem[i].addEventListener('change', () => {
                    if( alertFlag ) {
                        alertShow();
                    }
                });
            }
        }
        // 送信ボタンを押した時の処理
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alertFlag = true;
            alertShow();
            const alertLen = document.querySelectorAll('.v-alert').length;
            if( ! alertLen ) {
                form.submit();
            }
            // スクロールトップ
            const target = document.querySelector('.v-top');
            const targetOffsetTop = window.pageYOffset + target.getBoundingClientRect().top;
            window.scrollTo(0, targetOffsetTop - 30);
        });
        // 郵便番号
        if( zipLen ) {
            for( let i = 0; i < telLen; i++ ) {
                zip[i].addEventListener('keyup', removeHyphen);
            }
        }
        // 電話番号
        if( telLen ) {
            for( let i = 0; i < telLen; i++ ) {
                tel[i].setAttribute('type', 'tel');
                tel[i].addEventListener('keyup', removeHyphen);
            }
        }
        // 最低文字数
        // minlength(2);
        // 最大文字数
        // maxlength(9);
        // メールアドレス
        if( doubleCheck01 ) {
            doubleCheck01.onpaste = () => { return false };
        }
        if( doubleCheck02 ) {
            doubleCheck02.onpaste = () => { return false };
        }
        // 電話番号
        if( telLen ) {
            for( let i = 0; i < telLen; i++ ) {
                tel[i].type = 'tel';
            }
        }
    }
}

// 共通
function alertShow() {
    // 必須入力
    requiredAlertRemove();
    if ( RequiredTextLen ) {
        requiredAlertValue(RequiredText, RequiredTextLen);
    }
    if ( RequiredTextareaLen ) {
        requiredAlertValue(RequiredTextarea, RequiredTextareaLen);
    }
    if ( RequiredEmailLen ) {
        requiredAlertValue(RequiredEmail, RequiredEmailLen);
    }
    if ( RequiredSelectLen ) {
        requiredAlertValue(RequiredSelect, RequiredSelectLen);
    }
    if ( RequiredCheckboxLen ) {
        requiredAlertChecked(RequiredCheckbox, RequiredCheckboxLen);
    }
    if ( RequiredRadioLen ) {
        requiredAlertChecked(RequiredRadio, RequiredRadioLen);
    }
    // メールアドレス
    if( emailLen ) {
        emailCheck(email, emailLen);
    }
    if( doubleCheck01 ) {
        doubleCheck();
    }
}

// 最低文字数
function minlength(num) {
    const minText = document.querySelectorAll(`.v-minlength${num}`);
    const minTextLen = minText.length;
    for( let i = 0; i < minTextLen; i++ ) {
        minText[i].setAttribute('minlength', num)
    }
}

// 最大文字数
function maxlength(num) {
    const maxText = document.querySelectorAll(`.v-maxlength${num}`);
    const maxTextLen = maxText.length;
    for( let i = 0; i < maxTextLen; i++ ) {
        maxText[i].setAttribute('maxlength', num)
    }
}

// ハイフン削除
function removeHyphen(elem) {
    elem.target.value = elem.target.value.replace(/-/g, '');
}

// 必須入力
function requiredAlertValue(array, arrayLen) {
    for( let i = 0; i < arrayLen; i++ ) {
        if( ! array[i].value ) {
            array[i].insertAdjacentHTML('beforebegin', '<div class="v-alert">必須です。</div>');
        }
    }
}
function requiredAlertChecked(array, arrayLen) {
    for( let i = 0; i < arrayLen; i++ ) {
        if( ! array[i].checked ) {
            array[i].insertAdjacentHTML('beforebegin', '<div class="v-alert">必須です。</div>');
        }
    }
}
function requiredAlertRemove() {
    const RequiredAlert = document.querySelectorAll('.v-alert');
    const RequiredAlertLen = RequiredAlert.length;
    if( RequiredAlertLen ) {
        for( let i = 0; i < RequiredAlertLen; i++ ) {
            RequiredAlert[i].remove();
        }
    }
}

// メールアドレス
function emailCheck(array, emailLen) {
    for( let i = 0; i < emailLen; i++ ) {
        if ( ! array[i].value.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) ) {
            array[i].insertAdjacentHTML('beforebegin', '<div class="v-alert">Emailが正しくありません。</div>');
        }
    }
}
function doubleCheck() {
    if ( doubleCheck01.value != doubleCheck02.value ) {
        doubleCheck02.insertAdjacentHTML('beforebegin', '<div class="v-alert">一致していません。</div>');
    }
}