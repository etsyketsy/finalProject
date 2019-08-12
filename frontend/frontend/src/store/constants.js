export let baseUrl;
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://eskin.propulsion-learn.ch/backend/api/'
} else {
    baseUrl = 'https://eskin.propulsion-learn.ch/backend/api/'
}
