

/**
 * Modo de visibilidad de la encuesta.
 * 
 * - __Editor__   : Modo de edición.
 *      - El usuario puede editar la encuesta.
 * 
 * - __Preview__  : Modo de previsualización.
 *      - El usuario editor puede ver como va a ser la encuesta.
 * 
 * - __Answering__: Modo de contestando encuesta.
 *      - El usuario puede contestar la encuesta.
 * 
 * - __Closed__   : Modo de cerrada o finalizada.
 *      - El usuario no puede editar ni contestar.
 * 
 * - __Hidding__  : Modo de ocultación del control.
 *      - El control será visible dependiendo la configuración del control de la encuesta.
 **/
export enum VisibilityMode {
    Editor = 'editor',
    Preview = 'preview',
    Answering = 'answering',
    Closed = 'closed',
    Hidding = 'hidding'
}