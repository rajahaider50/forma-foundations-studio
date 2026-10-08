package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun StudentsScreen(onCreate:()->Unit){Card{Column{Text("Students");Text("Domain-specific students workflow");Button(onClick=onCreate){Text("Create")}}}}
