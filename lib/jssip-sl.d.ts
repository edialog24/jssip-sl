declare module 'jssip-sl' {
    export class UA {
        constructor(configuration: {
            uri: string;
            sockets: any;
            session_timers?: boolean;
            register?: boolean;
            contact_uri?: string;
            display_name?: string;
            connection_recovery_max_interval?:  number;
            connection_recovery_min_interval?: number;
            ha1?: string;
            instance_id?: string;
            no_answer_timeout?: number;
            realm?: string;
            register_expires?: number;
            registrar_server?: string;
            use_preloaded_route?: boolean;
            authorization_user?: string;
            password?: string;
        });

        on(event: string, handler: (data: any) => void): void;

        call(target: any, options: any): any;

        destroyTransaction(transaction: any): void;

        findDialog(call_id: any, from_tag: any, to_tag: any): any;

        findSession(request: any): any;

        get(parameter: any): any;

        isConnected(): any;

        isRegistered(): any;

        loadConfig(configuration: any): any;

        newMessage(data: any): void;

        newRTCSession(data: any): void;

        newTransaction(transaction: any): void;

        normalizeTarget(target: any): any;

        receiveRequest(request: any): void;

        register(): void;

        registered(data: any): void;

        registrationFailed(data: any): void;

        registrator(): any;

        sendMessage(target: any, body: any, options: any): any;

        set(parameter: any, value: any): any;

        start(): void;

        stop(): void;

        terminateSessions(options: any): void;

        unregister(options: any): void;

        unregistered(data: any): void;

        static C: {
            CONFIGURATION_ERROR: number;
            NETWORK_ERROR: number;
            STATUS_INIT: number;
            STATUS_NOT_READY: number;
            STATUS_READY: number;
            STATUS_USER_CLOSED: number;
        };
    }

    export class URI {
        constructor(scheme: any, user: any, host: any, port: any, parameters: any, headers: any);

        clearHeaders(): void;

        clearParams(): void;

        clone(): any;

        deleteHeader(header: any): any;

        deleteParam(parameter: any): any;

        getHeader(name: any): any;

        getParam(key: any): any;

        hasHeader(name: any): any;

        hasParam(key: any): any;

        setHeader(name: any, value: any): void;

        setParam(key: any, value: any): void;

        toAor(show_port: any): any;

        toString(): any;
    }

    export class WebSocketInterface {
        constructor(url: any);

        connect(): void;

        disconnect(): void;

        isConnected(): any;

        isConnecting(): any;

        send(message: any): any;
    }

    export const C: {
        ACCEPTED_BODY_TYPES: string;
        ACK: string;
        ALLOWED_METHODS: string;
        BYE: string;
        CANCEL: string;
        INFO: string;
        INVITE: string;
        MAX_FORWARDS: number;
        MESSAGE: string;
        MIN_SESSION_EXPIRES: number;
        NOTIFY: string;
        OPTIONS: string;
        REASON_PHRASE: {
            '100': string;
            '180': string;
            '181': string;
            '182': string;
            '183': string;
            '199': string;
            '200': string;
            '202': string;
            '204': string;
            '300': string;
            '301': string;
            '302': string;
            '305': string;
            '380': string;
            '400': string;
            '401': string;
            '402': string;
            '403': string;
            '404': string;
            '405': string;
            '406': string;
            '407': string;
            '408': string;
            '410': string;
            '412': string;
            '413': string;
            '414': string;
            '415': string;
            '416': string;
            '417': string;
            '420': string;
            '421': string;
            '422': string;
            '423': string;
            '424': string;
            '428': string;
            '429': string;
            '430': string;
            '433': string;
            '436': string;
            '437': string;
            '438': string;
            '439': string;
            '440': string;
            '469': string;
            '470': string;
            '478': string;
            '480': string;
            '481': string;
            '482': string;
            '483': string;
            '484': string;
            '485': string;
            '486': string;
            '487': string;
            '488': string;
            '489': string;
            '491': string;
            '493': string;
            '494': string;
            '500': string;
            '501': string;
            '502': string;
            '503': string;
            '504': string;
            '505': string;
            '513': string;
            '580': string;
            '600': string;
            '603': string;
            '604': string;
            '606': string;
        };
        REFER: string;
        REGISTER: string;
        SESSION_EXPIRES: number;
        SIP: string;
        SIPS: string;
        SIP_ERROR_CAUSES: {
            ADDRESS_INCOMPLETE: number[];
            AUTHENTICATION_ERROR: number[];
            BUSY: number[];
            INCOMPATIBLE_SDP: number[];
            NOT_FOUND: number[];
            REDIRECTED: number[];
            REJECTED: number[];
            UNAVAILABLE: number[];
        };
        SUBSCRIBE: string;
        UPDATE: string;
        USER_AGENT: string;
        causes: {
            ADDRESS_INCOMPLETE: string;
            AUTHENTICATION_ERROR: string;
            BAD_MEDIA_DESCRIPTION: string;
            BUSY: string;
            BYE: string;
            CANCELED: string;
            CONNECTION_ERROR: string;
            DIALOG_ERROR: string;
            EXPIRES: string;
            INCOMPATIBLE_SDP: string;
            INTERNAL_ERROR: string;
            MISSING_SDP: string;
            NOT_FOUND: string;
            NO_ACK: string;
            NO_ANSWER: string;
            REDIRECTED: string;
            REJECTED: string;
            REQUEST_TIMEOUT: string;
            RTP_TIMEOUT: string;
            SIP_FAILURE_CODE: string;
            UNAVAILABLE: string;
            USER_DENIED_MEDIA_ACCESS: string;
            WEBRTC_ERROR: string;
        };
    };

    export const name: string;

    export const version: string;

    export function debug(namespace: any, ...args: any[]): any;

    export namespace Exceptions {
        function ConfigurationError(parameter: any, value: any): void;

        function InvalidStateError(status: any): void;

        function NotReadyError(message: any): void;

        function NotSupportedError(message: any): void;

        namespace ConfigurationError {
            namespace prototype {
                const message: string;

                const name: string;

                const stack: string;

                function toString(): any;
            }
        }

        namespace InvalidStateError {
            namespace prototype {
                const message: string;

                const name: string;

                const stack: string;

                function toString(): any;
            }
        }

        namespace NotReadyError {
            namespace prototype {
                const message: string;

                const name: string;

                const stack: string;

                function toString(): any;
            }
        }

        namespace NotSupportedError {
            namespace prototype {
                const message: string;

                const name: string;

                const stack: string;

                function toString(): any;
            }
        }
    }

    export namespace Grammar {
        class SyntaxError {
            message: string;
            name: string;
            constructor(expected: any, found: any, offset: any, line: any, column: any);

            // Native method; no parameter or return type inference available
            toString(): any;
        }

        function parse(input: any, startRule: any): any;

        function toSource(): any;

        namespace parse {
            const prototype: {};
        }

        namespace toSource {
            const prototype: {};
        }
    }

    export class RtcSession {
        on(event: string, handle: (data: any) => void): void;
        renegotiate(opts: any, finished: () => void): void;
        isMuted(): { audio: boolean; video: boolean };
        unmute(opts: { audio?: boolean; video?: boolean }): void;
        mute(opts: { audio?: boolean; video?: boolean }): void;
        connection: RTCPeerConnection;
    }

    export namespace debug {
        function enabled(module: string): boolean;
        function enable(module: string): void;
        var log: (...args: any[]) => void;
        var formatArgs: (...args: any[]) => any;
    }
}
