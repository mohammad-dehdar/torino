"use client";

import Form from "./Form";
import CustomInput from "@/components/modules/CustomInput";

const BankInfo = ({ userInfo, handleChange, handleSave, setEditSection, editSection }) => {
    return (
        <Form
            title="اطلاعات حساب بانکی"
            editMode={editSection === "bank"}
            onEdit={() => setEditSection("bank")}
            onSave={handleSave}
            onCancel={() => setEditSection(null)}
        >
            {editSection === "bank" ? (
                <>
                    <CustomInput
                        placeholder="شماره کارت"
                        type="text"
                        name="cardNumber"
                        value={userInfo.cardNumber}
                        onChange={handleChange}
                    />
                    <CustomInput
                        placeholder="شماره شبا"
                        type="text"
                        name="shabaNumber"
                        value={userInfo.shabaNumber}
                        onChange={handleChange}
                        className="my-4"
                        />
                    <CustomInput
                        placeholder="شماره حساب"
                        type="text"
                        name="accountNumber"
                        value={userInfo.accountNumber}
                        onChange={handleChange}
                    />
                </>
            ) : (
                <>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">شماره کارت</span> {userInfo.cardNumber || "—"}
                    </p>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">شماره شبا</span> {userInfo.shabaNumber || "—"}
                    </p>
                    <p className="md:flex md:gap-20">
                        <span className="font-light md:w-28">شماره حساب</span> {userInfo.accountNumber || "—"}
                    </p>
                </>
            )}
        </Form>
    );
};

export default BankInfo;
