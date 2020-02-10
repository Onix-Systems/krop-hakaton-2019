<?php

use Illuminate\Database\Seeder;
use Encore\Admin\Auth\Database\Menu;
use Encore\Admin\Auth\Database\Permission;
use Encore\Admin\Auth\Database\Role;
use Illuminate\Support\Facades\DB;

class AdminTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // base tables
        Menu::truncate();
        Menu::insert([
            'parent_id' => 0,
            'order' => 1,
            'title' => 'Data List',
            'icon' => 'fa-bar-chart',
            'uri' => '/data',
        ]);
        $adminMenuId = Menu::insertGetId([
            'parent_id' => 0,
            'order' => 2,
            'title' => 'Admin',
            'icon' => 'fa-tasks',
            'uri' => '/data',
        ]);
        Menu::insertGetId([
            'parent_id' => $adminMenuId,
            'order' => 3,
            'title' => 'Users',
            'icon' => 'fa-users',
            'uri' => '/auth/users',
        ]);
        Menu::insertGetId([
            'parent_id' => $adminMenuId,
            'order' => 4,
            'title' => 'Roles',
            'icon' => 'fa-user',
            'uri' => '/auth/roles',
        ]);
        Menu::insertGetId([
            'parent_id' => $adminMenuId,
            'order' => 5,
            'title' => 'Permission',
            'icon' => 'fa-ban',
            'uri' => 'auth/permissions',
        ]);
        Menu::insertGetId([
            'parent_id' => $adminMenuId,
            'order' => 6,
            'title' => 'Menu',
            'icon' => 'fa-bars',
            'uri' => 'auth/menu',
        ]);
        Menu::insertGetId([
            'parent_id' => $adminMenuId,
            'order' => 7,
            'title' => 'Operation log',
            'icon' => 'fa-history',
            'uri' => 'auth/logs',
        ]);

        Permission::truncate();
        $allPermissionsId = Permission::insertGetId([
            'name' => 'All permission',
            'slug' => '*',
            'http_path' => '*',
        ]);
        Permission::insert([
            'name' => 'Dashboard',
            'slug' => 'dashboard',
            'http_method' => 'GET',
            'http_path' => '/',
        ]);
        Permission::insert([
            'name' => 'Login',
            'slug' => 'auth.login',
            'http_path' => "/auth/login\n/auth/logout",
        ]);
        Permission::insert([
            'name' => 'User setting',
            'slug' => 'auth.setting',
            'http_method' => 'GET,PUT',
            'http_path' => '/auth/setting',
        ]);
        Permission::insert([
            'name' => 'Auth management',
            'slug' => 'auth.management',
            'http_path' => "/auth/roles\n/auth/permissions\n/auth/menu\n/auth/logs",
        ]);


        Role::truncate();
        $adminRoleId = Role::insertGetId([
            'name' => 'Administrator',
            'slug' => 'administrator',
        ]);

        // pivot tables
        DB::table('admin_role_menu')->truncate();
        DB::table('admin_role_menu')->insert(
            [
                'role_id' => $adminRoleId,
                'menu_id' => $adminMenuId,
            ]
        );

        DB::table('admin_role_permissions')->truncate();
        DB::table('admin_role_permissions')->insert(
            [
                'role_id' => $adminRoleId,
                'permission_id' => $allPermissionsId,
            ]
        );

        // finish
    }
}
