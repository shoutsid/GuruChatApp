/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from '../models/Message';
import type { Thread } from '../models/Thread';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Read Thread
     * @param id 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readThreadAiThreadGet(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai/thread',
            query: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Thread
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createThreadAiThreadPost(
requestBody: Thread,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/thread',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create User
     * @param requestBody 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createUserAiUserPost(
requestBody: User,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Response
     * @param userId 
     * @param requestBody 
     * @param threadId 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createResponseAiResponsePost(
userId: number,
requestBody: Message,
threadId?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/response',
            query: {
                'thread_id': threadId,
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
