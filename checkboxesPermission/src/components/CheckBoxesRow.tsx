import React, { useState } from "react";

type Props = {
  label: string;
  permissions: any;
  setPermissions: any;
};

const CheckBoxesRow = ({ label, permissions, setPermissions }: Props) => {
  const handleDeleteChanged = (isChecked: boolean) => {
    setPermissions({
      read: isChecked,
      write: isChecked,
      delete: isChecked,
    });
  };

  const handleNonDeleteChanged = (key: string, isChecked: boolean) => {
    if (!isChecked) {
      setPermissions({ ...permissions, [key]: isChecked, delete: false });
    } else {
      setPermissions({ ...permissions, [key]: isChecked });
    }
  };

  return (
    <>
      {label}
      <input
        type="checkbox"
        checked={permissions.read}
        onChange={(e) =>
          handleNonDeleteChanged("read", e.currentTarget.checked)
        }
      />
      <input
        type="checkbox"
        checked={permissions.write}
        onChange={(e) =>
          handleNonDeleteChanged("write", e.currentTarget.checked)
        }
      />
      <input
        type="checkbox"
        checked={permissions.delete}
        onChange={(e) => handleDeleteChanged(e.currentTarget.checked)}
      />
    </>
  );
};

export default CheckBoxesRow;
