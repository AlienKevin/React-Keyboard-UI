import KeyUI from '../../../Key-UI'
import keysets from '../../../../model/keyset/keysets'
import React from 'react'
import '../Keyboard-shuang.css'

const foxi =
    <div className={['Keyboard', 'shuang'].join(' ')} key="shuang-foxi">
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.TildeAndBackquote}/>
        <KeyUI setKey={keysets.english.qwerty.ExclamationMarkAndDigitOne}/>
        <KeyUI setKey={keysets.english.qwerty.AtSignAndDigitTwo}/>
        <KeyUI setKey={keysets.english.qwerty.NumberSignAndDigitThree}/>
        <KeyUI setKey={keysets.english.qwerty.DollarSignAndDigitFour}/>
        <KeyUI setKey={keysets.english.qwerty.PercentAndDigitFive}/>
        <KeyUI setKey={keysets.english.qwerty.CaretAndDigitSix}/>
        <KeyUI setKey={keysets.english.qwerty.AmpersandAndDigitSeven}/>
        <KeyUI setKey={keysets.english.qwerty.AsteriskAndDigitEight}/>
        <KeyUI setKey={keysets.english.qwerty.OpenRoundBracketAndDigitNine}/>
        <KeyUI setKey={keysets.english.qwerty.CloseRoundBracketAndDigitZero}/>
        <KeyUI setKey={keysets.english.qwerty.UnderstrikeAndMinus}/>
        <KeyUI setKey={keysets.english.qwerty.PlusAndEqualsSign}/>
        <KeyUI setKey={keysets.english.qwerty.Backspace} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.Tab} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.foxi.Q} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.W} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.E} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.R} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.T} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.Y} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.U} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.I} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.O} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.P} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenCurlyBracketAndOpenSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.CloseCurlyBracketAndCloseSquareBracket}/>
        <KeyUI setKey={keysets.english.qwerty.VerticalBarAndBackslash}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CapsLock} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.foxi.A} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.S} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.D} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.F} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.G} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.H} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.J} className={'underline-mark shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.K} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.L} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.ColonAndSemicolon}/>
        <KeyUI setKey={keysets.english.qwerty.QuoteAndSingleQuote}/>
        <KeyUI setKey={keysets.english.qwerty.Enter} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.ShiftLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.foxi.Z} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.X} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.C} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.V} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.B} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.N} className={'shuang'}/>
        <KeyUI setKey={keysets.shuang.foxi.M} className={'shuang'}/>
        <KeyUI setKey={keysets.english.qwerty.OpenPointyBracketAndComma}/>
        <KeyUI setKey={keysets.english.qwerty.ClosePointyBracketAndPeriod}/>
        <KeyUI setKey={keysets.english.qwerty.QuestionMarkAndSlash}/>
        <KeyUI setKey={keysets.english.qwerty.ShiftRight} float={{center: 'leftCenter'}}/>
      </div>
      <div className={'Keyboard-Row'}>
        <KeyUI setKey={keysets.english.qwerty.CtrlLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinLeft}/>
        <KeyUI setKey={keysets.english.qwerty.AltLeft} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.shuang.foxi.SpaceBar}/>
        <KeyUI setKey={keysets.english.qwerty.AltRight} float={{center: 'leftCenter'}}/>
        <KeyUI setKey={keysets.english.qwerty.WinRight}/>
        <KeyUI setKey={keysets.english.qwerty.Menu}/>
        <KeyUI setKey={keysets.english.qwerty.CtrlRight} float={{center: 'leftCenter'}}/>
      </div>
    </div>

export default foxi