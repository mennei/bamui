module.exports = {
    SERVICE_NAME: 'menora.services.bam-ui',
    PORT: process.env.PORT || 3000,
    BASE_API_PATH: '/bamui/api/v1',
    ZIPKIN_PATH: 'http://localhost:9411/api/v1/spans',
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING || '',
    MONGODB_NAME: process.env.MONGODB_NAME || 'digital_bam_ui',
    MONGODB_COLLECTION: process.env.MONGODB_COLLECTION || 'testWithType',
    PREFIX_PATH: process.env.PREFIX_PATH || "http://localhost",
    VALUES_URL: "http://localhost:3000/bamui/api/v1/values",
    TEST_URL: "http://localhost:3000/bamui/api/v1/test",
    UPDATE_URL: "http://localhost:3000/bamui/api/v1/update",
    // Oauth2 
    TOKEN_URL: process.env.TOKEN_URL || "https://localhost/api/v1/token",
    LOGIN_URL: "http://bam-ui:3000/bamui/api/v1/loginAuthentication",
}