/**
 * 前台菜单实体
 */
export class BaseMenu {
  /** 名称 */
  name: string | undefined;

  /** 路由 */
  url: string | undefined;

  /** 图标 */
  icon: string | undefined;

  /** 权限 */
  role: string | undefined;
}
