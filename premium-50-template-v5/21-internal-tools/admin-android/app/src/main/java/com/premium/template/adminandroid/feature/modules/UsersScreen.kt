package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun UsersScreen(onCreate:()->Unit){Card{Column{Text("Users");Text("Domain-specific users workflow");Button(onClick=onCreate){Text("Create")}}}}
