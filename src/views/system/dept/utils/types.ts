/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-27 11:15:58
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-27 11:16:13
 */
interface FormItemProps {
  higherDeptOptions: Record<string, unknown>[];
  parentId: number;
  name: string;
  principal: string;
  phone: string | number;
  email: string;
  sort: number;
  status: number;
  remark: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
