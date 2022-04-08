export default [
    // GetUserInfo
    {
        url: '/login',
        type: 'post',
        response: () => {
            return {
                code: 200,
                message: '成功',
                data: {
                    name: 'testName',
                },
            };
        },
    },
    // getToken
    {
        url: '/auth/oauth/token',
        type: 'post',
        response: () => {
            return {
                code: 200,
                message: '成功',
                data: {
                    name: 'testName',
                },
            };
        },
    },
];

