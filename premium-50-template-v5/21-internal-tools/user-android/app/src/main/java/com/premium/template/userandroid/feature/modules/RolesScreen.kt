package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun RolesScreen(onCreate:()->Unit){Card{Column{Text("Roles");Text("Domain-specific roles workflow");Button(onClick=onCreate){Text("Create")}}}}
