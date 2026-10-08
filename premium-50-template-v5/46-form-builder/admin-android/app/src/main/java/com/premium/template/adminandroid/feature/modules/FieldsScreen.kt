package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FieldsScreen(onCreate:()->Unit){Card{Column{Text("Fields");Text("Domain-specific fields workflow");Button(onClick=onCreate){Text("Create")}}}}
