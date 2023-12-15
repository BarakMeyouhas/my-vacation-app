class User {
    static findOne(arg0: { user_name: any; password: any; }) {
        throw new Error("Method not implemented.");
    }
    public id: number;
    public user_name: string;
    public user_email: string;
    public password: string;

    constructor(
        id: number,
        user_name: string,
        user_email: string,
        password: string,
    ) {
        this.id = id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.password = password;
    }
}
    

export default User;