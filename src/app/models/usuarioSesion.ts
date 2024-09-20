// export interface UsuarioSesion{
//     ussID: string,
//     ussIdSession: string,
//     ussIdSessionAs: string,
//     ussIP: string,
//     usuUsuario: string,
//     tdcTdEpl: string,
//     eplNd: number,
//     ussFechaIngreso: string,
//     emsId: string,
//     esaId: string,
//     dsaId: string,
//     idUsuario: string,
//     usuCorreo: string
//  }
 

export class UsuarioSesion{

    constructor(

        public ussID?: string,
        public ussIdSession?: string,
        public ussIdSessionAs?: string,
        public ussIP?: string,
        public usuUsuario: string = '',
        public tdcTdEpl?: string,
        public eplNd?: number,
        public ussFechaIngreso?: string,
        public emsId?: string,
        public esaId?: string,
        public dsaId?: string,
        public idUsuario?: string,
        public usuCorreo?: string

    )
    
    {}
 }