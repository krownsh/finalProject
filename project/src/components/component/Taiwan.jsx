import * as React from "react";
import "./css/taiwan.css";
const clickTwMap = () => {

    console.log('連線')
}
function Taiwan(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg className='twSvg'{...props} >
            {/* 基隆 */}
            <path onClick={clickTwMap} value="" d='M264.22,23.4l-.14.08-4.38,1.91-1.44,1,.21,1,1.65,2.14a1,1,0,0,1,.09.15l1,2.09,1.67,2,2.2,2.08,1.73,1.24,6.37,2.65,2.86.37,2.17-.81,1.19-.88.12-.76-2-2.09a.88.88,0,0,1-.23-.55l-.11-1.88v-.07l.17-6.73-6.31-1.53-.09,0-2.4-.88a.75.75,0,0,1-.3-.2l-1-1a.24.24,0,0,1-.08-.09l-.4-.52-.27-.19Z' />
            {/* 新北 */}
            <path onClick={clickTwMap} value="" d='M231.67,105.19,226.14,100l-.83-3.34-.46-3,1.88-2.25,1-3.53-5.41-7.93L219,78.58l-4.58.25-2.81-1.57.8-4-.68-3.4-3.32-3.17-.63-2.94.66-3.56-.13-3.72,2.1-2.29,8.1-2.38,2.25-2.33.65-2.8L221.06,44l-3.31-4.82L215,37.74l-2.47-.58-1.9-1.72-3-1.93-3.87-1.87-2-2.23,6.22-1.13,3.1-1.2,3.84-3.2,1.05-.53,1.34-.24,1.75,0,2,.66L222,25.24,222.8,27,224,28.2l2.9-1.17-2.55-4-3.67-3.72-1.66-1,.4-1.25,1-.82,1.21-.58.6-.69,1.32-3.27,1.92-3.52,4-3.61,5.87-3L242.08,0l6.52.77,2.64,2,6.19,8.72,2.37,4.95,1.11-.47,1.62-.44,1.77-.2.91.25v.06l-.58.71-.72,1.27.06,1.63.8.94,1,.67-2.22,1.48-4.39,1.9-2.28,1.54.43,2.17,1.81,2.34,1.06,2.19,1.81,2.2,2.31,2.2,1.95,1.39L272.86,41l3.36.43,2.63-1,1.76-1.29.3-1.92-2.33-2.44-.1-1.72.18-6.86,20.9,5.08,1.63,1-.88,2L300,36.3l.45,3.29L302,45.11l1.74,2.68,1.55.71,4.42-.67,2.17.23,2.51.68,2.19,1.1.86,1.09-4.59,2.27-.32-.47-2.3-1.3-3.91.82-5.27,2.81-2.25,1.49L291.75,58l-1.08,2.26,1.56,2.22-.87,2-2.7,1.72-2.14.75-2.43,1.28L282,70.86,280.11,74l-3,2.14-3.83,1.19-8.42,5-8,3.27L254.39,87l-1,.87-2,1.72L250,92.88l.09,2.73.65,2,.19.94-2.19,1.55-4.08,2-3.12,2.19-2.34,2-3,1.12-3.19.89Zm3-60.8,2.59,4.38,3.64,2.87,2.31,2.64,2.4,2.13,3.14.7,3.75,0L255.23,56l4.83-6.08,1.39-3-2.56-2.19-2.71-1.53-.11-2.87,1-4.17-1.1-3-2.39-2.13-1.52-6.16-2-4.21-.24-2,.36-2.39-1.5-1.58-2.65-.87-2.69,1.33-1.86,1.59-6.77,4-2.3,2.57-1.33,2.86L230,27.65l-1.18,2.17,2.55,2.85,3.5,3.36.71,3.66Z' />
            {/* 台北市 */}
            <path onClick={clickTwMap} value="" d='M235.91,35.19a1,1,0,0,1,.25.46l.74,3.88a1,1,0,0,1,0,.34L236,44.16l2.21,3.75,3.45,2.71.12.11,2.32,2.66,2.08,1.83,2.68.6,3.34,0,2.23-.92L259,49.22l.91-2-1.75-1.49-2.78-1.56a.87.87,0,0,1-.44-.72l-.11-3.17a.65.65,0,0,1,0-.24l.95-3.84-.85-2.31-2.25-2a.87.87,0,0,1-.26-.44l-1.52-6.16-1-2.12-1-2a.79.79,0,0,1-.08-.26l-.25-2.15a.89.89,0,0,1,0-.23l.28-1.82-.85-.88-1.84-.61-2.07,1-1.74,1.48a.5.5,0,0,1-.12.08l-6.65,4-2,2.29-1.26,2.72s-.06.11-.09.15l-1.08,1.44-.68,1.26,1.92,2.16Z' />
            {/* 桃園 */}
            <path onClick={clickTwMap} value="" d='M159.66,59.35h.06a.83.83,0,0,1,.48.15l2.87,1.94a.85.85,0,0,1,.3.35l2.34,5.07,2.74,1.08,2.65.76.13,0,2.49,1.19,4.2,1.37a1,1,0,0,1,.39.25l2.22,2.59a.83.83,0,0,1,.2.72l-.62,3.22,1.69,1.82,3.85,1.22a.75.75,0,0,1,.25.13l2.59,1.88.1.09L190.35,85l2,.37,2.27-.19h.08a.83.83,0,0,1,.61.26l2.11,2.18a.7.7,0,0,1,.13.17l1.49,2.6,2.47,1.22.14.09,2.13,1.64a.84.84,0,0,1,.33.62l.22,3.06,1,4.45a.86.86,0,0,1,0,.39l-1.17,4.81a.84.84,0,0,1-.13.29l-2.67,3.76.26,2,2.85,2.2,3.67,2.2,3.28.56a.82.82,0,0,1,.36.15l2.46,1.76,4.45,2.53,2.09.94,0-.07a.85.85,0,0,1,.48-.5l2.44-1a.87.87,0,0,1,.32-.06l.17,0,1.76.35,1.62-.6,1.07-1.81L226.76,112a.87.87,0,0,1,.33-.9l3.33-2.43a.79.79,0,0,1,.28-.13l.94-.27-1-2.31-5.44-5.14a.85.85,0,0,1-.24-.42l-.86-3.46s0-.05,0-.08l-.49-3.22a.86.86,0,0,1,.19-.69l1.82-2.18.74-2.69L221.45,81l-2.71-1.07-4.42.23h0a.78.78,0,0,1-.42-.11l-3.19-1.78a.86.86,0,0,1-.43-.92l.81-4-.54-2.74-3.13-3a.85.85,0,0,1-.25-.44L206.45,64a1,1,0,0,1,0-.34l.66-3.5L207,56.38a.87.87,0,0,1,.22-.61l2.3-2.5a.85.85,0,0,1,.39-.25l7.89-2.32,1.76-1.82.52-2.23-.25-2.15-2.95-4.3L214.51,39l-2.41-.57a.74.74,0,0,1-.38-.2l-1.93-1.74-2.85-1.82-3.84-1.87a.7.7,0,0,1-.26-.19l-2.31-2.51-11.95,2.16-5.43,2-2.65,1.45-2.23,2-.11.08-2.67,1.67a.66.66,0,0,1-.19.09L164,43.13l-4.29,3.63-4.23,5.05-4.92,7.85.79.27Z' />
            {/* 新竹縣 */}
            <path onClick={clickTwMap} value="" d='M154.74,82.21l.15.06,3.36,1.79a1,1,0,0,1,.2.15l2.4,2.38a.72.72,0,0,1,.17.22l1.15,2.28a.91.91,0,0,1,.06.61L161.62,92a.84.84,0,0,1-.4.52l-1.46.84a1,1,0,0,1-.29.11l-3.12.52L153,95.35l-1.92,2.4-1.35,3.4a.88.88,0,0,1-.14.23l-1.22,1.49,2.52,6.28,2.24,2.59,3.59,2.67,7.48,3.53a.86.86,0,0,1,.2.13l2.38,2.08a.88.88,0,0,1,.29.52l.48,3.27a.66.66,0,0,1,0,.2l-.22,2.43a.52.52,0,0,1,0,.11l-.49,2.13s0,0,0,.06l-.53,1.69.52,1.55a.14.14,0,0,1,0,.07l.59,2.45a.85.85,0,0,1,0,.42l-.76,2.86-.42,2.31,1.54.38,4.56-1.26.17,0,4.23-.27h.14l2.81.28,7.66-1.94a.75.75,0,0,1,.21,0,.9.9,0,0,1,.54.18l3.1,2.48a.85.85,0,0,1,.29.43l.76,2.53,1.89,1.84a.9.9,0,0,1,.15.19l2.82,4.85a.94.94,0,0,1,.11.32l.25,1.91,6.26-.58h.08a.83.83,0,0,1,.22,0l1,.28,2.41-5.81a.8.8,0,0,1,.18-.27L216.3,137l2.11-3.28-.31-2.41a.78.78,0,0,1,0-.34l.84-3s0,0,0,0l1.17-3.29-2.24-1-.07,0-4.53-2.58-.07,0-2.34-1.68-3.25-.55a1,1,0,0,1-.3-.11l-3.85-2.31-.08-.06-3.17-2.44a.88.88,0,0,1-.33-.57l-.36-2.71a.9.9,0,0,1,.16-.61l2.77-3.9,1.08-4.45-.94-4.32s0-.08,0-.13l-.19-2.73-1.75-1.35L198,91.79a.87.87,0,0,1-.36-.35l-1.57-2.73-1.75-1.81-2,.17h-.23l-2.37-.45a.8.8,0,0,1-.45-.24l-1.91-1.88L185,82.72l-3.94-1.25a.8.8,0,0,1-.37-.23l-2.14-2.31a.83.83,0,0,1-.21-.75L179,75l-1.8-2.09-4-1.31-.1,0-2.48-1.19-2.61-.75-.08,0-3.11-1.22a.86.86,0,0,1-.46-.44l-2.38-5.17-2.43-1.64-8.17.58h-.06a.87.87,0,0,1-.28-.05l-1.33-.47-.87,1.39-1.34,3.65-.36,1.61.1.59a.86.86,0,0,1-.57,1l-1.42.49L143.74,71l-1.14,1.56-.46,1.62-.36,2.33a.83.83,0,0,1-.14.35l-.39.58,4.17,1.8Z' />
            {/* 新竹市 */}
            <path onClick={clickTwMap} value="" d='M137.83,97.77l2.64,1.61a1.09,1.09,0,0,1,.25.23l1.54,2.15,2.23.9,2.31-.56,1.4-1.71L149.55,97a.61.61,0,0,1,.13-.22l2.14-2.68a.86.86,0,0,1,.34-.26l3.63-1.49.18,0,3.06-.52,1-.58.43-1.63-.94-1.86-2.21-2.19-3.18-1.69-9.3-3-.08,0-4.6-2-.58.62-.68,1.35.49,1,0,.08.42,1.14a.87.87,0,0,1,.05.28l0,1a.73.73,0,0,1-.08.38l-.45,1a.64.64,0,0,1-.08.14L138,87.67l-3.39,6.93-.47,1.72,3.56,1.38Z' />
            {/* 苗栗 */}
            <path onClick={clickTwMap} value="" d='M101.31,160.6l3.85,3.36,9.26,6.84,4.42,2.14,3.94.72a.88.88,0,0,1,.27.1l7,4,7.11-.37,2.68-1.45.49-4.12a.87.87,0,0,1,.41-.64l3.43-2a.86.86,0,0,1,.44-.12h.07l6.12.46a1.14,1.14,0,0,1,.25.06l3.76,1.5a.9.9,0,0,1,.32.23l2.95,3.28,2.82,1.12,5.13-2.76.08,0,4.17-1.71,7.1-5.66.12-.08,3.55-1.94,2.75-2.67.1-.08,2.64-1.86a.86.86,0,0,1,.49-.15h0l3.13.07,2.49-1,1-3.11a.83.83,0,0,1,.32-.44l1.89-1.32-.31-2.33-2.67-4.6-2-1.92a.94.94,0,0,1-.22-.37l-.74-2.49-2.56-2L180,141a.76.76,0,0,1-.21,0h-.08l-2.89-.29-4.07.27L168,142.32a.85.85,0,0,1-.23,0,.69.69,0,0,1-.2,0l-2.54-.61a.86.86,0,0,1-.65-1l.57-3.15s0,0,0-.07l.72-2.68-.54-2.2-.59-1.77a.87.87,0,0,1,0-.53l.6-1.93.47-2,.21-2.26-.43-2.85-2.05-1.8-7.46-3.51a.42.42,0,0,1-.14-.09L152,113.07a.8.8,0,0,1-.13-.13l-2.4-2.77a1.28,1.28,0,0,1-.15-.25l-2.44-6.08-2.29.56-.21,0a.87.87,0,0,1-.32-.06l-2.72-1.09a.93.93,0,0,1-.38-.3l-1.58-2.21L137,99.28,133.68,98a.88.88,0,0,1-.41.44l-2,1-.37.82-1.13,3.52a.81.81,0,0,1-.21.34l-2.27,2.3-1.43,2,.53,3a.85.85,0,0,1-.24.76.82.82,0,0,1-.61.25h-.16l-4.27-.81-3.12.82-2.67,2-2.48,2.59-.77,1.38-.69,1.6a1,1,0,0,1-.15.24l-1.18,1.31a.85.85,0,0,1-.4.25l-3.87,1.15-.72,1.26-1,3.77a1,1,0,0,1-.09.21l-3.64,6.43-1.3,3.32-.54,4a.78.78,0,0,1-.07.25l-1.15,2.51a.8.8,0,0,1-.15.21l-4.06,4.52,5.32,8.23Z' />
            {/* 台中 */}
            <path onClick={clickTwMap} value="" d='M72.4,194.4l2.48,2.17a.9.9,0,0,1,.23.32l1.65,3.94a.9.9,0,0,1,.06.22l.61,4.47,2.46,3L87,210.6a.85.85,0,0,1,.31.17L90,213a1,1,0,0,1,.17.19l2,3.11a.56.56,0,0,1,0,.08l1.24,2.47a.78.78,0,0,1,.09.37l0,2.32.55,1.48,2.16.39a.7.7,0,0,1,.32.13l3.4,2.21a.9.9,0,0,1,.39.72v0l1.8.07h.09l11,1.56,2.21-.35,2.8-2.68,4.62-8.79,2.28-5.23a.84.84,0,0,1,.42-.43l4-1.9a1,1,0,0,1,.38-.08h.12l6.21.9,3.25-.15,3.33-4.44a1.15,1.15,0,0,1,.23-.21L145,203.6a.86.86,0,0,1,.46-.14.87.87,0,0,1,.51.17l5.25,3.9,1.37-.36,1.46-3a.76.76,0,0,1,.22-.28l2.91-2.45a.85.85,0,0,1,.55-.2h0l3.95.07,2.78-1.06,4.78-4.61a.59.59,0,0,1,.18-.13l3.14-1.78a1,1,0,0,1,.27-.1l2.61-.49,5.38-2.83a.92.92,0,0,1,.36-.1l3.79-.14,3.73-.6,6.82-2.7a1.1,1.1,0,0,1,.26-.06l2.9-.2h.06l.19,0,2.87.65,7.93.74,1.33-1,.67-1.11a1,1,0,0,1,.33-.32l2-1,1.66-2,.76-3a.64.64,0,0,1,.1-.24l1.86-3.06a.93.93,0,0,1,.28-.28l4.45-2.81,1.32-3.46.26-2.48a.89.89,0,0,1,.23-.51l2.23-2.33-2.65-2.15H222l-2.8,1.33a.73.73,0,0,1-.24.07l-2.43.38h-.13a.88.88,0,0,1-.49-.15l-2.28-1.57-2.59-1.49-2.92-.64a.87.87,0,0,1-.62-.53l-.9-2.3a.86.86,0,0,1,0-.42l.33-2.72-1.55-.42-1.61-.43-6.18.58-.29.2-2.08,1.46-1,3.21a.84.84,0,0,1-.48.53l-3,1.26a.88.88,0,0,1-.33.06h0l-3-.06-2.35,1.65-2.79,2.69a.62.62,0,0,1-.18.14l-3.58,2-7.14,5.69a.94.94,0,0,1-.22.12l-4.23,1.73-5.45,2.92a.86.86,0,0,1-.72,0l-3.38-1.33a.91.91,0,0,1-.32-.22l-3-3.29-3.45-1.38-5.71-.44L142,172.46l-.49,4.15a.86.86,0,0,1-.45.66L137.79,179a.75.75,0,0,1-.36.1l-7.56.4h-.05a.82.82,0,0,1-.43-.12l-7.07-4.07-3.91-.72a.63.63,0,0,1-.22-.07l-4.59-2.22a.57.57,0,0,1-.13-.08l-9.37-6.92,0,0-3.9-3.41-.06-.06-2.94-3.12a.58.58,0,0,1-.1-.12l-5.12-7.91-7.44,8.27-2,3.24-1.73,6.05a.64.64,0,0,1-.08.19L75,178.34l-1.66,7.51,0,.1-1.38,4a.92.92,0,0,1-.26.38l-1.83,1.52-.35,1.55,2.61.85A1.11,1.11,0,0,1,72.4,194.4Z' />
            {/* 彰化 */}
            <path onClick={clickTwMap} value="" d='M48.68,260h.15l4.68.25.18,0,4.15,1.13.08,0,7.1,2.71,12.13,1.37a1,1,0,0,1,.29.08l7.37,3.65,3.4,0h0l.17,0,7.09,1.4.35-.23,1.4-1,1.53-1.36a.82.82,0,0,1,.25-.16l2-.8.29-1.09-2.79-1.42-2.37-.86a.84.84,0,0,1-.28-.18l-2.27-2.06a.8.8,0,0,1-.24-.38l-1.26-3.91a.85.85,0,0,1,0-.32l.54-8.32s0-.06,0-.09l.71-4,.06-3.45a1.57,1.57,0,0,1,0-.23l1-3.37s0-.07,0-.11l1.16-2.58-.32-2.27a.87.87,0,0,1,.06-.45l.76-1.82a.84.84,0,0,1,.51-.48l2.07-.74v-2l-2.86-1.87-2.48-.44a.86.86,0,0,1-.66-.55L91.92,222a.71.71,0,0,1-.06-.28l0-2.27-1.13-2.25-1.91-3-2.43-2-7.22-2.12a.92.92,0,0,1-.42-.28L76,206.43a.8.8,0,0,1-.19-.43l-.63-4.6-1.53-3.66-2.2-1.92-2.91-.95-6.67,7.8a.17.17,0,0,1-.06.06l-1.51,1.45-.46,1.41-.37,6.16a.75.75,0,0,1-.05.26l-.73,1.89a.91.91,0,0,1-.27.37l-3,2.37-.61,1.43-.37,1.76a.89.89,0,0,1-.26.45l-1,.9a.8.8,0,0,1-.21.15l-1.3.62-1.42,1-1.74,1.74-1.58,2.74-3.56,9.94a.54.54,0,0,1,0,.11l-2.52,4.76L39.11,247a.94.94,0,0,1-.12.22l-1.27,1.77a.43.43,0,0,1-.11.12l-4.26,4.09-.65,1.61-1,4.34a.68.68,0,0,1-.07.2l-.08.16,3.76,2.17Z' />
            {/* 南投 */}
            <path onClick={clickTwMap} value="" d='M198.71,188.22l-2.64.18-6.78,2.69-.18,0-3.88.62h-.1l-3.64.14-5.32,2.79a.85.85,0,0,1-.24.09l-2.6.49-2.93,1.65-4.83,4.66a.81.81,0,0,1-.29.19l-3.1,1.18a.85.85,0,0,1-.31.06h0l-3.79-.07-2.52,2.12L154,208.28a.84.84,0,0,1-.55.46l-2.17.56-.21,0a.87.87,0,0,1-.52-.17l-5.1-3.79-1.23.78-3.49,4.64a.86.86,0,0,1-.65.34l-3.74.17h-.16l-6-.88-3.45,1.65-2.17,5s0,0,0,.05L119.8,226a.92.92,0,0,1-.17.22l-3.09,3a.91.91,0,0,1-.46.23l-2.61.41h-.25l-11.13-1.56-1.68-.06v1.33a.87.87,0,0,1-.57.82l-2.3.81L97,232.45l.32,2.27a.87.87,0,0,1-.07.48L96.05,238l-1,3.21-.07,3.4c0,.05,0,.09,0,.14l-.71,4.06-.53,8.11,1.14,3.54,2,1.8,2.26.82.09,0,3.46,1.75a.87.87,0,0,1,.45,1l-.59,2.19a.85.85,0,0,1-.51.58l-2.25.91-1.45,1.3-.09.07-1,.64,1,3.93a.9.9,0,0,1,0,.56l-1.2,2.81L96.47,283l.63,4.64a.82.82,0,0,1,0,.41l-1.15,3.13-.5,3.1,2.08,2.46,3.14,1.37,3.91-1.19.16,0,5.13-.55h.1a.86.86,0,0,1,.69.35l1.4,1.9,3.4.37a.79.79,0,0,1,.22,0l4.15,1.61,2.53.72.17.07,3.21,1.74a.86.86,0,0,1,.45.82l-.24,3.28a1,1,0,0,1-.11.37l-1.68,2.89.67,2.59,1.63,4a.77.77,0,0,1,.07.27l.23,3.51.5,1.79,4.12.74,15.83.11.2,0,.56.14,2.71.63.11,0,3.62,1.4a.8.8,0,0,1,.38.3l2.6,3.6a.68.68,0,0,1,.12.24l.08.24,2.75-1.56,1.45-1.34-.92-3.35a.87.87,0,0,1,.08-.65l.91-1.58.9-2.46a.83.83,0,0,1,.29-.4l3.23-2.38a.86.86,0,0,1,.32-.15l4.59-1,.16,0,4.28-.14,2.83-2.53.8-5a.85.85,0,0,1,.17-.39l2.44-3.19a.93.93,0,0,1,.39-.29l4.65-1.68,2.44-1.73.92-2.84,2-7.8.74-5-.56-4.3-.69-3.16-1.84-2.35a.57.57,0,0,1-.08-.13l-1.33-2.49a.84.84,0,0,1,0-.85l3.42-5.64.13-2.11a.69.69,0,0,1,0-.24l1.57-4.38,0-.06,2.36-5.23,1.88-5.33,1-6.07.36-4.47-1-2.53-1.25-2a.87.87,0,0,1-.1-.72l1.49-4.73s0-.07,0-.11l3.14-6.62a.86.86,0,0,1,.1-.16l4.82-6.28.13-1.94-.77-2.39-3-1.93-.16-.13-1.77-1.9a.84.84,0,0,1-.24-.56l-.16-6.2a.88.88,0,0,1,.34-.7l2.29-1.78a.91.91,0,0,1,.26-.13l4.09-1.37,2.63-1.23-.1-1.6-.71-3.21-7.67-.72h-.11Z' />
            {/* 雲林 */}
            <path onClick={clickTwMap} value="" d='M18.51,315l5,2.8,3.22,0,2-1.61,1-2.81a.91.91,0,0,1,.11-.22l1.28-1.84a.92.92,0,0,1,.58-.36l3.08-.48,4.14-3.38A.71.71,0,0,1,39,307l2.65-1.41,2.27-2.27a1,1,0,0,1,.18-.13l10.13-5.86a.72.72,0,0,1,.2-.09l4.46-1.21.07,0,7.83-1.47.12,0,4.28-.22h.05a.91.91,0,0,1,.57.21l3.27,2.88.09.09,3,3.47,7.42,2.72,2-.29L92.7,302l.23,0a.83.83,0,0,1,.5.16l2.94,2.06a.85.85,0,0,1,.24.26l1.2,2,3.33-.34,7.2-1.46,1.8-.6v-1.58l.23-3.09v0l-.86-1.17-4.56.49-4.14,1.26a.78.78,0,0,1-.26,0,.83.83,0,0,1-.34-.07l-3.61-1.58a1.08,1.08,0,0,1-.32-.24l-2.46-2.91a.86.86,0,0,1-.19-.69l.57-3.58a.94.94,0,0,1,0-.16l1.11-3-.61-4.55a1,1,0,0,1,0-.24l.64-4.46a.9.9,0,0,1,.06-.22l1.13-2.64-.82-3.15h-.09a.5.5,0,0,1-.17,0L88.15,271l-3.53.05h0a1,1,0,0,1-.38-.09l-7.42-3.68-12.1-1.36-.21-.05-7.16-2.74-4-1.09-4.52-.25-13.58,1.62h-.11a.85.85,0,0,1-.43-.12L30.75,261l-.11.2a.83.83,0,0,1-.24.29L27.09,264l-.37.73-.62,1.64a.94.94,0,0,1-.12.22l-3.76,5-.72,1.7-1.42,5.34-.77,6.17a.86.86,0,0,1-.1.32l-2.66,4.67-1.68,5.91-.44,7.5.13,10.18a.83.83,0,0,1-.21.58L13,315.45l5-.56h.09A.81.81,0,0,1,18.51,315Z' />
            {/* 嘉義縣 */}
            <path onClick={clickTwMap} value="" d='M81.17,368.58l-2.59-2L77.67,364l1.08-8.77-.63-4.87L71.94,344l-1-3.07-1.36-2.78-2.65-1.6L62.3,335l-5.35.3-9.56,1.78-4.91,2.21-3.86,2.86-2.95,3-4.08,3.16L28,350.62l-1.54,3.06-3.61,1.61-4.34-1.11-5.5-.81-1.36-.51.49,0L14,352l1.47.48-.88-3.34-1.72,1.25-1-.24-1.2-.06,0-1.56,1.39-3.18,2-.14,3.91,0-2.48-7.06-2.51-4.86,1.14-2.15v-1.59l-1.82-.9.15-.63,1.06-1.28.56-1.58,3.06-4-5.81.36L11.3,317l.29,0,.1-.07,6.3-.71,5.14,2.9,4,0L29.83,317l1.07-3.12L32,312.24l3.24-.5,4.41-3.61,2.76-1.46,2.37-2.36,10-5.81,4.4-1.2,7.8-1.46,4.06-.21,3.14,2.76,3.14,3.69,8,2.95,2.4-.35,5-1.43,2.7,1.9,1.58,2.62,4.19-.43,7.33-1.48,2.78-.92v-2.45l.2-2.62,3.59.39,4.13,1.6,2.56.73,2.92,1.58-.21,2.9-1.9,3.27.83,3.16,1.64,4,.24,3.58.76,2.7,5,.89,15,.11L136,330l-5.33,4.28-2.25,4.27-2.56,3-4.69,2.65-5.05,3.85-2.75,3.29-7.49,4.47-3.5.36-4.42-.46-2.49,2.47-.11,3.29.93,2.91.51,3.5-4.64-.54-2.31-.71-3.26.43-3.31,1.49ZM59.64,317.09l-6,1-2.57,2.8.61,3.95,4,1.6,4.34,2.8,4.77,1.07,4.29-1.72,2.86-.37,2.21-1.62-1.7-4.54-1.62-2.64L68.26,318l-3.63-1.38Z' />
            {/* 嘉義市 */}
            <path onClick={clickTwMap} value="" d='M52.89,323.93l3.33,1.33.14.07,4.23,2.72,4.15.93,4-1.59a.8.8,0,0,1,.21-.05L71.5,327l1.15-.85-1.32-3.54L70,320.41l-2.28-1.23L64.45,318l-4.66.42-5.45.94-1.85,2Z' />
            {/* 台南 */}
            <path onClick={clickTwMap} value="" d='M22.57,418.58l.07.22L25,423.86l2.58,1.3L37,426.52l5-.54h.19l5,.6,2.29-.8,2.09-1.54a1.18,1.18,0,0,1,.19-.11l3.92-1.57L59.39,420l1.39-3.18,0-.08,1.86-3.27.06-.09L66,409a.27.27,0,0,1,.07-.08l3.81-4,.08-.07,4-3.31,4.56-4.45L82.46,392l6.19-10.52,0-.05,6.42-9.31,1-3L92,368.69l-.15,0L89.72,368l-2.79.37-3.23,1.45a.85.85,0,0,1-.35.08h0l-2.33,0a.88.88,0,0,1-.51-.18l-2.8-2.17a.77.77,0,0,1-.29-.4l-1-2.83a.81.81,0,0,1,0-.38l1.07-8.72-.56-4.27L71,344.83a.83.83,0,0,1-.2-.32l-1.06-3.11-1.15-2.34-2.2-1.32-4.21-1.39-5.05.28-9.3,1.73-4.65,2.09-3.68,2.74-2.86,2.93-.08.08-4.12,3.2-.08.05-3.37,2.08L27.5,354.4a.86.86,0,0,1-.42.4l-3.89,1.73a.84.84,0,0,1-.35.07l-.21,0-4.45-1.13-5.46-.81a.47.47,0,0,1-.17,0l-2.46-.93-.43,1.09,1.74,1.16a.85.85,0,0,1,.37.86.83.83,0,0,1-.63.69l-1.35.34-.7.76-2,5.35-.25,1.16.27,1.24a.92.92,0,0,1-.19.75l-1.32,1.52-.8,2.14-.47,1.51.72,1.7a1,1,0,0,1,.06.16l.5,2.44a.86.86,0,0,1-.08.57l-.82,1.58a.88.88,0,0,1-.49.42l-1.61.54-1.13.63L1.18,382l1.43,1.65,2.6,2.24a.87.87,0,0,1,.27.41L6,387.89a.9.9,0,0,1-.14.76.87.87,0,0,1-.68.35l-2.81,0,4,1a.89.89,0,0,1,.43.25l.89,1a.87.87,0,0,1,.18.86L7.13,394a.87.87,0,0,1-.55.54l-1.92.61-.15,0-2.16.29-1.44.75-.55,1.08L0,399.12l.36,1.7,1.24,1.07.94-.24,1-1.52.15-.17,1.43-1.28a.82.82,0,0,1,.57-.22.8.8,0,0,1,.34.07l2.53,1.1a.81.81,0,0,1,.47.52l.51,1.52a.93.93,0,0,1,0,.33l-.29,4.09.44.75,1.11.05.76-1.16.62-2a.81.81,0,0,1,.1-.21l.76-1.16a.87.87,0,0,1,.72-.39h.12l3.94.56a.87.87,0,0,1,.72.68l.66,3.26a.84.84,0,0,1-.05.52l-1.65,3.77a.82.82,0,0,1-.29.35l-2.12,1.52,1.7,1.72a.89.89,0,0,1,.16.22l1.13,2.25a.81.81,0,0,1,.08.25l.4,2.64,2.73-1.64a.89.89,0,0,1,.45-.12.77.77,0,0,1,.3.06A.84.84,0,0,1,22.57,418.58Z' />
            {/* 高雄 */}
            <path onClick={clickTwMap} value="" d='M60.12,478.43a.7.7,0,0,1,0-.32l.1-4.42a.64.64,0,0,1,0-.2l3.48-13.07.07-5.75-.34-4.32a1,1,0,0,1,0-.34l1.6-4.85.8-4.4a.57.57,0,0,1,0-.14l1.08-3a.86.86,0,0,1,.81-.57h0l10.9.64,4.59-1.62,3.81-4.24a.9.9,0,0,1,.27-.2l5.84-2.78a.81.81,0,0,1,.37-.09.78.78,0,0,1,.39.1l7.61,3.84,3.68-3.28a.87.87,0,0,1,.37-.19l4.49-1.1.21,0a.84.84,0,0,1,.65.31l4.66,5.46,3.08,2.9,4.71-3.72a.86.86,0,0,1,.49-.18l2.67-.15h.2l3.11.57,1.33-.16-.48-1.91-3.66-3.79-.1-.13-1.86-2.86a.93.93,0,0,1-.12-.33l-.85-5.06a.78.78,0,0,1,0-.34l1.45-6.05a.85.85,0,0,1,.28-.46l5.22-4.44,2.44-3.33,0-6.69a1.48,1.48,0,0,1,0-.19l1.84-8-1.31-6a1,1,0,0,1,0-.29l.54-4.26a.86.86,0,0,1,.45-.65l4.36-2.38,1.35-2.48-1.25-3.34a.8.8,0,0,1,0-.43l.54-3.56a.84.84,0,0,1,.38-.6l4.76-3.07,2.4-2.37.14-.11,4-2.54a1.12,1.12,0,0,1,.25-.11l8.95-2.19-.09-.69-1.61-4.44-3.73-3-3.41-2.22a.91.91,0,0,1-.37-.51l-.6-2.47a.83.83,0,0,1,0-.54l.84-2a.9.9,0,0,1,.45-.45l3.23-1.43,1.51-2.52-1.06-3.24-.36-1.12-2.37-3.29L150.18,326l-2.36-.56-11.13,5.69-5,4-2.14,4.08-.1.15-2.64,3.13a.87.87,0,0,1-.23.19l-4.71,2.66L117,349.05l-2.71,3.24a.79.79,0,0,1-.22.18L106.44,357a.77.77,0,0,1-.35.12l-3.65.37h-.17l-3.85-.4-1.7,1.67-.08,2.56L97.5,364a.32.32,0,0,1,0,.14l.61,4.11a.62.62,0,0,1,0,.13.74.74,0,0,1-.05.29l-1.41,4.11a.78.78,0,0,1-.11.2l-6.46,9.38L83.92,393l-.06.09-4,5.17-.08.09-4.62,4.51-.06.05-4,3.31-3.75,3.92-3.21,4.28-1.81,3.18-1.47,3.36a.82.82,0,0,1-.29.37L56.66,424a.91.91,0,0,1-.17.09l-3.92,1.57-2.1,1.55a1,1,0,0,1-.23.12l-2.6.91a.69.69,0,0,1-.28.05h-.11l-5.13-.61-5,.54h-.21l-9.73-1.39a.62.62,0,0,1-.26-.09l-3-1.5a.84.84,0,0,1-.4-.41l-2.18-4.77-2.47,1.48,1.21,7.8.42,1.05,1.72,3a.92.92,0,0,1,.09.23l.3,1.2.61.6L24,436a.87.87,0,0,1,.28.35l.34.8a.72.72,0,0,1,.06.46l-.21,1.49a.65.65,0,0,1-.06.21l-.87,2.1-.05,1.55.59,2.62,2.81,6.19,3,4.7.06.1,1.66,3.54a.88.88,0,0,1,.05.15l.94,3.59a.82.82,0,0,1,0,.44l-.7,2.55c0,.05,0,.1-.05.14l-1.2,2.54.85,2.46,2,2.48,5.56,5.14.06.06,3.3,3.76a1,1,0,0,1,.11.17l1,2,1.32,2.5a.63.63,0,0,1,.08.23l.93,4.56a.84.84,0,0,1-.35.87l7.51,5.87.87,0,1-.37a.74.74,0,0,1,.25-.05l1-.06h.05a.8.8,0,0,1,.34.07l.78.34L62,487.75,61.8,483Z' />
            {/* 屏東 */}
            <path onClick={clickTwMap} value="" d='M124.14,542a1.05,1.05,0,0,1-.27-.2l-2.83-3a1.09,1.09,0,0,1-.13-.17l-2-3.68a.85.85,0,0,1-.11-.34l-.34-3.76v-.09l.06-3.27-1.63-2.35-1.92-.93a.84.84,0,0,1-.34-.28l-1.68-2.41a.8.8,0,0,1-.15-.6l.33-2.84a1.12,1.12,0,0,1,.1-.31l1.28-2.41a.92.92,0,0,1,.32-.33l3.14-1.87,1.09-1.68-2.49-3a.4.4,0,0,1-.1-.15l-1.62-3.1a.82.82,0,0,1-.1-.4v-3.27l-.62-4.28-1.23-3.69,0-.11-.77-4.06a.75.75,0,0,1,0-.21l.51-9.14a.67.67,0,0,1,.06-.28l1.89-4.64a.31.31,0,0,1,0-.1l2.26-4,1.46-4a.78.78,0,0,1,.26-.36l3.34-2.79a1.06,1.06,0,0,1,.37-.18l4.63-1,2.86-1.62.09,0,5.71-2.43,1.06-2.6.1-3.07a.71.71,0,0,1,0-.14l1.61-8-2.83-1.87-3.17-.77a.86.86,0,0,1-.64-.7l-.45-2.87L129.37,435l-2.76-.5-2.29.12-5.09,4a.84.84,0,0,1-.53.19.86.86,0,0,1-.6-.24l-3.64-3.44-.07-.07-4.34-5.09-3.77.92-4,3.52a.83.83,0,0,1-.57.22.86.86,0,0,1-.39-.09l-7.76-3.92-5.3,2.53-3.84,4.27a.92.92,0,0,1-.35.24l-5,1.76a.92.92,0,0,1-.28.05H78.8l-10.43-.62-.83,2.33-.8,4.4,0,.12-1.57,4.74.33,4.18v.08l-.07,5.89a.78.78,0,0,1,0,.22l-3.48,13.07-.1,4.16,1.67,4.49a.75.75,0,0,1,0,.26l.24,5.12a1,1,0,0,1-.06.35l-4.78,12,1,.63L60,501,63,503.53l2.72,1.87,6.16,3,.1,0,2.72,1.77a1,1,0,0,1,.31.35l.4.83.06.16.51,2,.32.22.55.19A.61.61,0,0,1,77,514l2,1.16.1.07,5,4a.73.73,0,0,1,.17.18l1.25,1.77a1.09,1.09,0,0,1,.08.15l2.67,6,3.37,4.18.08.1,1,1.75.06.13,12.36,32.08a.84.84,0,0,1,0,.47l-.34,1.87a.81.81,0,0,1-.14.33l-1.41,2L103,572v6.59a.31.31,0,0,1,0,.1l-.23,2,0,1.12.24,1.28,3.35,5.59a.87.87,0,0,1,.1.59l-.76,4.24.09,1,1.86,1.57,1.44.36.87-.88.18-3.78a.86.86,0,0,1,.34-.65.9.9,0,0,1,.52-.17l.2,0,4.92,1.21.15.05,4.89,2.21a.91.91,0,0,1,.17.09l4.2,3.2a1,1,0,0,1,.2.21L127.1,600l.05-1-.86-5.59a.37.37,0,0,1,0-.11l-.08-5.21a.83.83,0,0,1,.28-.64l2.47-2.29.07-.06,1.9-1.4,1.46-3.41.93-4.37-.52-31.07-1.88.14h-.06a.76.76,0,0,1-.36-.08Z' />
            {/* 台東 */}
            <path onClick={clickTwMap} value="" d='M222.85,341.75s0,.08,0,.13l.37,4.26a.89.89,0,0,1-.1.48l-2.26,4.27,0,.06-2.05,3.17-1.64,4-1.47,5.17a.78.78,0,0,1-.05.14l-2.28,4.74-3,8.18a.49.49,0,0,1,0,.11L208.49,380l.06,4a.66.66,0,0,1,0,.14L208,388a.86.86,0,0,1-.42.62l-4,2.32a.92.92,0,0,1-.43.11H203l-5.1-.73a.85.85,0,0,1-.42-.19l-7.3-6a1.16,1.16,0,0,1-.2-.24l-5.52-9.64-3.12-.85-3.86-.54a.88.88,0,0,1-.48-.24l-3-2.87L170.33,368l-4.8-1.75a.87.87,0,0,1-.43-.35l-3.14-5a.66.66,0,0,1-.12-.33l-.56-3.65L152.63,359l-3.82,2.41-2.4,2.37a.71.71,0,0,1-.14.1l-4.5,2.92-.45,3,1.31,3.5a.84.84,0,0,1,0,.71l-1.65,3.05a.82.82,0,0,1-.35.34l-4.2,2.29-.47,3.68,1.32,6a.81.81,0,0,1,0,.38l-1.87,8.09,0,6.87a.93.93,0,0,1-.16.51l-2.67,3.63-.14.15-5.08,4.32L125.92,419l.79,4.71,1.71,2.64,3.76,3.9a.83.83,0,0,1,.21.39l.78,3.07a.86.86,0,0,1-.73,1.07l-1.17.14,1.56,3a1.14,1.14,0,0,1,.09.26l.38,2.43,2.75.67a1.11,1.11,0,0,1,.27.12l3.44,2.27a.88.88,0,0,1,.38.89l-1.71,8.5-.1,3.15a1.07,1.07,0,0,1-.06.3L137,459.54a.9.9,0,0,1-.47.47l-6,2.54-2.93,1.66a.75.75,0,0,1-.25.09l-4.55,1-3,2.5-1.41,3.88a.69.69,0,0,1,0,.13l-2.27,4-1.82,4.46-.49,8.89.74,3.9,1.24,3.71,0,.15.64,4.42a.49.49,0,0,1,0,.12v3.12l1.48,2.83,2.84,3.4a.84.84,0,0,1,.06,1l-1.55,2.38a.9.9,0,0,1-.28.27l-3.1,1.84-1.09,2.06-.28,2.36,1.37,2,1.92.92a.84.84,0,0,1,.33.29l1.93,2.77a.85.85,0,0,1,.15.51l-.06,3.49.31,3.53,1.89,3.44L125,540.5l6,2.76,1.75-.13-.14-8.29v-.1l1-10a.36.36,0,0,1,0-.11l.85-3.54a.85.85,0,0,1,.09-.22l5.88-10.3,2.93-10.25,1.16-7.58a1,1,0,0,1,.1-.29l2-3.71.08-.13,5-6.17,1.56-3,3.22-8.3a.88.88,0,0,1,.12-.21L158,469.2a.77.77,0,0,1,.28-.23l1.5-.8,6.63-7.26a.54.54,0,0,1,.16-.14l9.93-6.63,2.83-2.69,2.88-3.66,1.26-2.07.69-1.79.1-1.53-.39-3.83a.88.88,0,0,1,0-.23l.3-1.64a.78.78,0,0,1,.19 -.41l2.05-2.37.09-.09,8.49-7.2.72-1.52a.75.75,0,0,1,.07-.12l6.31-9.11,1.26-3.5,1.83-8.07a.65.65,0,0,1,.09-.23l2.92-5.16,1-3.5s0-.09.05-.12l.65-1.41a1,1,0,0,1,.16-.24l1.32-1.37.11-.09,2.92-2.13,1.14-1.17L218.4,383l.59-5.8-.08-6.26a.49.49,0,0,1,0-.12l.9-7.08a1,1,0,0,1,0-.17l1.29 -3.82.06-.13,1.63-3,.07-.11,4.33-5.77,1.31-2.84,2.69-15.54-1.12-.32-6.19,3-2,2.88Z' />
            {/* 花蓮 */}
            <path onClick={clickTwMap} value="" d='M270.86,172.4a.84.84,0,0,1-.31-.12l-11.2-6.68-1.58.36-1.28,3.28a.87.87,0,0,1-.22.32l-3.06,2.82a.9.9,0,0,1-.59.22h0l-4.06,0a.73.73,0,0,1-.3-.06l-5.08-1.93-9.31-2.36-.17-.06-4-2a1,1,0,0,1-.17-.1l-.93-.76-2.13,2.23-.24,2.3a1.42,1.42,0,0,1,0,.22l-1.46,3.83a.9.9,0,0,1-.35.42l-4.52,2.86L218.13,180l-.78,3.09a.87.87,0,0,1-.17.33l-1.89,2.32a.84.84,0,0,1-.27.22l-1.9,1-.64,1.05a1,1,0,0,1-.23.26l-1.29.91.73,3.34a.5.5,0,0,1,0,.12l.15,2.25a.86.86,0,0,1-.49.84l-3.22,1.5-.09,0-4,1.33L202.23,200l.14,5.43,1.48,1.58,3.13,2.05a.82.82,0,0,1,.35.45l.92,2.84a.69.69,0,0,1,0,.32l-.16,2.37a.78.78,0,0,1-.18.46L203,221.92,200,228.41l-1.35,4.29,1.09,1.73.07.15,1.09,2.78a.84.84,0,0,1,.06.39l-.38,4.7a.13.13,0,0,1,0,.06l-1,6.18a.94.94,0,0,1,0,.16l-1.91,5.44,0,.07-2.37,5.23-1.52,4.23-.13,2.19a.93.93,0,0,1-.12.4l-3.28,5.4,1.06,2,1.92,2.45a.86.86,0,0,1,.16.35l.74,3.39a.17.17,0,0,1,0,.07l.59,4.45a.65.65,0,0,1,0,.24l-.76,5.19s0,.05,0,.08l-2,7.86s0,0,0,.06l-1,3.14a.85.85,0,0,1-.33.44l-2.76,2a.71.71,0,0,1-.21.11L183,305.23l-2.16,2.82-.81,5.09a.9.9,0,0,1-.28.5l-3.29,2.95a.92.92,0,0,1-.55.22l-4.51.14-4.33,1L164.24,320l-.84,2.28a.35.35,0,0,1-.06.14l-.76,1.34,1,3.5a.87.87,0,0,1-.25.86l-1.91,1.77a.91.91,0,0,1-.16.11l-3.13,1.79,1,2.94a.85.85,0,0,1-.08.71l-1.86,3.09a.81.81,0,0,1-.39.34l-3.16,1.41-.6,1.41.46,1.85,3.15,2.06.08.05,3.95,3.2a.84.84,0,0,1,.26.38l1.73,4.74a1.16,1.16,0,0,1,0,.18l.22,1.55.66,4.4,2.89,4.63,4.55,1.66.07,0,3.81,1.77a1,1,0,0,1,.24.15l2.9,2.79,3.64.51.11,0,3.51,1a.84.84,0,0,1,.52.4l5.63,9.82,7,5.73,4.57.65,3.4-1.95.5-3.37-.07-4.12a1,1,0,0,1,.1-.41l1.93-3.7,3-8.17,0-.08,2.26-4.71,1.47-5.15,0-.09,1.69-4.12.07-.14,2.07-3.2,2.13-4-.34-4-1-4.2a.83.83,0,0,1,.13-.7l2.4-3.39a.87.87,0,0,1,.32-.28l6.69-3.23a.84.84,0,0,1,.37-.09.93.93,0,0,1,.24,0l1.25.36,6.7-38.87a1,1,0,0,1,.07-.23l2.94-6,5-24.74a.7.7,0,0,1,0-.14l3.93-10.54,2-10,.23-3.93a.59.59,0,0,1,0-.13l.48-2.17a1,1,0,0,1,.11-.28l2.21-3.45.61-2,0-1.64-.32-.52-.69-.56a1.54,1.54,0,0,1-.17-.19l-.94-1.37a1.06,1.06,0,0,1-.11-.21l-1.11-3.25a.7.7,0,0,1,0-.25l-.12-2.92a1.06,1.06,0,0,1,0-.31l.92-2.73a.91.91,0,0,1,.11-.22l4.52-6.62,1.74-7.42.06-.16,1.74-3.75a1,1,0,0,1,.19-.26l1.55-1.5.08-.06,4-3,.25-.44-.32-.95a.86.86,0,0,1,.13-.79l.91-1.23c.05-.05.1-.11.15-.15l2.78-2.23,3.83-5.29a.52.52,0,0,1,.1-.11l3.53-3.45.64-1.11,0-.24-.37-.77-.49-.82-.12-.13h-.4Z' />
            {/* 宜蘭 */}
            <path onClick={clickTwMap} value="" d='M306.76,53.48l-5.07,2.7-2.24,1.49a.93.93,0,0,1-.31.13l-6.51,1.33-.47,1,1.26,1.79a.87.87,0,0,1,.09.84l-1,2.35a.9.9,0,0,1-.33.39l-2.86,1.82-.17.08-2.13.75-2.08,1.1-1.88,2.37-1.89,3.08a.79.79,0,0,1-.23.25l-3.13,2.24a1.15,1.15,0,0,1-.25.12l-3.75,1.16-8.28,5-.12.06-8,3.27-2.25,1.34-2.73,2.29-1,2.71.07,2.29.6,1.86a.29.29,0,0,1,0,.09l.26,1.26a.86.86,0,0,1-.34.88l-2.43,1.71a.35.35,0,0,1-.12.07l-4.07,2-3,2.09-2.33,2a1,1,0,0,1-.26.16l-3,1.14-.07,0-3.59,1-1.76.48-2.74,2,1.8,7.16a.83.83,0,0,1-.09.65l-1.4,2.38a.88.88,0,0,1-.44.37l-2.14.79a1,1,0,0,1-.3.05h-.17l-1.74-.35-1.84.75-.21.58-1.43,4-.78,2.75.33,2.55a.82.82,0,0,1-.13.57L217.7,138a1.34,1.34,0,0,1-.11.14L209,146.82l-2.27,5.44,1.33.36a.87.87,0,0,1,.63.94l-.4,3.24.66,1.67,2.6.57a.69.69,0,0,1,.25.1l2.73,1.58,0,0,2,1.39,2-.3,2.86-1.36a1,1,0,0,1,.37-.08h3a.87.87,0,0,1,.54.19l3.62,2.92,1.48,1.2,3.87,1.87,9.27,2.35.1,0,5,1.9,3.57,0,2.67-2.45,1.37-3.52a.84.84,0,0,1,.61-.53l2.36-.54a.62.62,0,0,1,.19,0,.89.89,0,0,1,.45.12l11.35,6.78,5.66.85a.74.74,0,0,1,0-.44l.32-.86a.94.94,0,0,1,.12-.22l.54-.71.26-.78.31-3.84,0-.14.5-2a1,1,0,0,1,.09-.22l.77-1.35.62-1.43-.25-4.13v-.12l.15-1.95a.78.78,0,0,1,.21-.5l4.37-5a.91.91,0,0,1,.21-.18l3.77-2.19,1.15-1.07-.24-1.12-1-1.55a1.28,1.28,0,0,1-.11-.24l-.47-1.86a.78.78,0,0,1,0-.37l.28-1.52a.88.88,0,0,1,.42-.6l3.35-1.9.43-2.94-.78-3.77-1.58-3a.87.87,0,0,1,.26-1.11l1.16-.82a1,1,0,0,1,.23-.12l1.61-.53a.57.57,0,0,1,.18,0l.39,0-1.28-.24a.79.79,0,0,1-.3-.12l-4-2.5a.75.75,0,0,1-.3-.31l-2.13-3.88a.9.9,0,0,1-.1-.39l-.12-5a.67.67,0,0,1,.05-.31l.83-2.33.11-2.22-2-9.51a.76.76,0,0,1,0-.15l-.16-4.61V91.2l.33-4.75s0-.07,0-.11l.95-4.78,0-.11,1.45-4.18a1.3,1.3,0,0,1,.08-.17l1.83-3,.07-.09,11.6-14.15.11-.11,3.43-3a.57.57,0,0,1,.18-.12l6.38-3.16L310,52.79Z' />
        </svg>
    )
}
export default Taiwan; 