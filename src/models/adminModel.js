import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const adminModel = sequelize.define("Admin", {
    userId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName:"Admin",
    timestamps: false,
}
);

sequelize.sync();