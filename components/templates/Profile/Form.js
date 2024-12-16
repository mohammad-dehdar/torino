"use client";

const Form = ({ title, children, onSave, onCancel, editMode = false, onEdit }) => {
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">{title}</h3>
                {!editMode && onEdit && (
                    <button
                        onClick={onEdit}
                        className="text-complementary"
                    >
                        ویرایش اطلاعات
                    </button>
                )}
            </div>
            {editMode ? (
                <>
                    <div className="grid md:gap-x-20">{children}</div>
                    <div className="flex gap-3 justify-end mt-4">
                        <button onClick={onSave} className="bg-primary text-white px-4 py-2 rounded">
                            ذخیره
                        </button>
                        <button onClick={onCancel} className="border px-4 py-2 rounded">
                            انصراف
                        </button>
                    </div>
                </>
            ) : (
                <div className="grid md:grid-cols-2 gap-4 *:flex *:justify-between md:*:justify-start">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Form;
