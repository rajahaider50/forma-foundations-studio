package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun UsersScreen(onCreate:()->Unit){Card{Column{Text("Users");Text("Domain-specific users workflow");Button(onClick=onCreate){Text("Create")}}}}
